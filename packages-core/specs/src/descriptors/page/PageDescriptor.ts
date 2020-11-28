import BaseDescriptorProps from "../common/BaseDescriptorProps";

import ParcelDescriptor from "../parcel/ParcelDescriptor";
export type PageManifestVersion = "1.0.0";

/**
 * An Application can have multiple pages
 */
export default interface PageDescriptor extends BaseDescriptorProps {
  /**
   * Manifest version
   */
  readonly manifestVersion: PageManifestVersion;
}
