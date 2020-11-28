import BaseDescriptorProps from "../common/BaseDescriptorProps";
export type ModuleManifestVersion = "1.0.0";

/**
 * A Module cannot be released independently, it has to be part of a Parcel.
 * Hence the descriptor doens't need to have a module version.
 */
export default interface ModuleDescriptor extends BaseDescriptorProps {
  /**
   * Manifest version
   */
  readonly manifestVersion: ModuleManifestVersion;

  /**
   * `functionModule` - function modules are simple functions which can be executed by the consumer
   *
   * `widgetModule` - widget modules will be rendered to the user
   */
  readonly type: "functionModule" | "widgetModule";

  /**
   * This is the entry path for the module
   */
  readonly entry: string;

  // dependencies
}
