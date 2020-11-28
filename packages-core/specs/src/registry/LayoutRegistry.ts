import { LayoutDescriptor } from "../descriptors";
import Registry from "./Registry";

export default interface LayoutRegistry extends Registry<LayoutDescriptor> {
  register: (layoutDescriptor: LayoutDescriptor) => void;
  registerMultiple: (layoutDescriptors: Array<LayoutDescriptor>) => void;
}
