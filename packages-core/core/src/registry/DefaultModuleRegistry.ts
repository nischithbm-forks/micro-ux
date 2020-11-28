import {
  ParcelDescriptor,
  ModuleDescriptor,
  ModuleRegistry,
} from "@micro-ux/specs";

export default class DefaultModuleRegistry implements ModuleRegistry {
  private recordMap = new Map<string, ModuleDescriptor>();
  private parentMap = new Map<string, ParcelDescriptor>();

  getKey(moduleDescriptor: ModuleDescriptor): string {
    return `${moduleDescriptor.id}`;
  }

  doRegister(
    moduleDescriptor: ModuleDescriptor,
    parcelDescriptor: ParcelDescriptor
  ): void {
    const moduleId = this.getKey(moduleDescriptor);
    if (this.recordMap.has(moduleId)) {
      // already registered
      // throw error
      return;
    }
    this.recordMap.set(moduleId, moduleDescriptor);
    this.parentMap.set(moduleId, parcelDescriptor);
  }

  registerModules(parcelDescriptor: ParcelDescriptor): void {
    parcelDescriptor.modules.forEach((moduleDescriptor) => {
      this.doRegister(moduleDescriptor, parcelDescriptor);
    });
  }

  get(moduleId: string): ModuleDescriptor | undefined {
    return this.recordMap.get(moduleId);
  }

  getParcel(moduleId: string): ParcelDescriptor | undefined {
    return this.parentMap.get(moduleId);
  }
}
