import { ApplicationDescriptor } from "../descriptors";
import Registry from "./Registry";

export default interface ApplicationRegistry
  extends Registry<ApplicationDescriptor> {
  register: (applicationDescriptor: ApplicationDescriptor) => void;
  registerMultiple: (
    applicationDescriptors: Array<ApplicationDescriptor>
  ) => void;
}
