import BaseDescriptorProps from "../common/BaseDescriptorProps";
import ParcelDescriptor from "../parcel/ParcelDescriptor";
import LayoutDescriptor from "../layout/LayoutDescriptor";
import PageDescriptor from "../page/PageDescriptor";

/**
 * Application is the top level entity
 */
export default interface ApplicationDescriptor extends BaseDescriptorProps {
  readonly parcels: Array<ParcelDescriptor>;
  readonly layouts: Array<LayoutDescriptor>;
  readonly pages: Array<PageDescriptor>;
}
