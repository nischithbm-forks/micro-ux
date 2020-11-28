import { ModuleDescriptor, ParcelDescriptor } from "../descriptors";
import Registry from "./Registry";

export default interface ModuleRegistry extends Registry<ModuleDescriptor> {
  registerModules: (parcelDescriptor: ParcelDescriptor) => void;
  getParcel: (key: string) => ParcelDescriptor | undefined;
}
