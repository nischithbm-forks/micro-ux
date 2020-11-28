import { ModuleDescriptor, ParcelDescriptor } from "../descriptors";
import Registry from "./Registry";

export default interface ParcelRegistry extends Registry<ParcelDescriptor> {
  register: (parcelDescriptor: ParcelDescriptor) => void;
  registerMultiple: (parcelDescriptors: Array<ParcelDescriptor>) => void;
  getModules: (key: string) => Array<ModuleDescriptor> | undefined;
}
