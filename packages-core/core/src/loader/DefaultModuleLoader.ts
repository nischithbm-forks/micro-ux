import { ParcelLoader, ModuleRegistry, ModuleLoader } from "@micro-ux/specs";

export default class DefaultModuleLoader implements ModuleLoader {
  private moduleRegistry: ModuleRegistry;
  private parcelLoader: ParcelLoader;

  constructor(moduleRegistry: ModuleRegistry, parcelLoader: ParcelLoader) {
    this.moduleRegistry = moduleRegistry;
    this.parcelLoader = parcelLoader;
  }

  load(moduleId: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const parcelDescriptor = this.moduleRegistry.getParcel(moduleId);
        if (!parcelDescriptor) {
          reject(`parcelDescriptor not registered for moduleId=${moduleId}`);
          return;
        }
        await this.parcelLoader.load(parcelDescriptor.id);

        if (parcelDescriptor.buildType === "federatedModuleWebpack") {
          const moduleScopeName = parcelDescriptor.id;
          const moduleName = moduleId;

          // Initializes the share scope. This fills it with known provided modules from this build and all remotes
          // @ts-ignore
          await __webpack_init_sharing__("default");

          const container = window[moduleScopeName]; // or get the container somewhere else

          // Initialize the container, it may provide shared modules
          // @ts-ignore
          await container.init(__webpack_share_scopes__.default);

          const ModuleFactory = await window[moduleScopeName].get(moduleName);
          const Module = ModuleFactory();

          console.log("module found = ", Module);
          resolve(Module && Module.default);
          return;
        }

        reject(`unknown parcelBuildType=${parcelDescriptor.buildType}`);
      } catch (error) {
        console.error("error fetching module - network error", error);
        reject(error);
      }
    });
  }
}
