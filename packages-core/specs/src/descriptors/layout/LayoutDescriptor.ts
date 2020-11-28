import BaseDescriptorProps from "../common/BaseDescriptorProps";

export type LayoutManifestVersion = "1.0.0";

/**
 * An Application can have multiple layouts
 */
export default interface LayoutDescriptor extends BaseDescriptorProps {
  /**
   * Manifest version
   */
  readonly manifestVersion: LayoutManifestVersion;
}
