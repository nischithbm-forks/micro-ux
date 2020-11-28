import {
  ParcelDescriptor,
  ModuleDescriptor,
  ModuleRegistry,
  ParcelRegistry,
} from "@micro-ux/specs";

export default class DefaultParcelRegistry implements ParcelRegistry {
  private recordMap = new Map<string, ParcelDescriptor>();
  private childrenMap = new Map<string, Array<ModuleDescriptor>>();
  private moduleRegistry: ModuleRegistry;

  constructor(moduleRegistry: ModuleRegistry) {
    this.moduleRegistry = moduleRegistry;
  }

  getKey(parcelDescriptor: ParcelDescriptor): string {
    return parcelDescriptor.id;
  }

  register(parcelDescriptor: ParcelDescriptor, parentValue?: null): void {
    const key = this.getKey(parcelDescriptor);
    if (this.recordMap.has(key)) {
      // already registered
      // throw error
      return;
    }
    this.moduleRegistry.registerModules(parcelDescriptor);
    this.recordMap.set(key, parcelDescriptor);
    this.childrenMap.set(key, parcelDescriptor.modules);
  }

  registerMultiple(parcelDescriptors: Array<ParcelDescriptor>): void {
    parcelDescriptors.forEach((parcelDescriptor) => {
      this.register(parcelDescriptor);
    });
  }

  get(parcelId: string): ParcelDescriptor | undefined {
    return this.recordMap.get(parcelId);
  }

  getModules(parcelId: string): Array<ModuleDescriptor> | undefined {
    return this.childrenMap.get(parcelId);
  }
}
