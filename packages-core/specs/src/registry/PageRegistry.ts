import { PageDescriptor } from "../descriptors";
import Registry from "./Registry";

export default interface PageRegistry extends Registry<PageDescriptor> {
  register: (pageDescriptor: PageDescriptor) => void;
  registerMultiple: (pageDescriptors: Array<PageDescriptor>) => void;
}
