import BaseDescriptorProps from "../common/BaseDescriptorProps";

import ModuleDescriptor from "../module/ModuleDescriptor";
import ParcelPerformanceHints from "./ParcelPerformanceHints";

export type ParcelManifestVersion = "1.0.0";
export enum ParcelBuildType {
  federatedModuleWebpack = "federatedModuleWebpack",
}
export { ParcelPerformanceHints };

/**
 * A Parcel is just a release vehicle to help releasing 1 or more modules
 */
export default interface ParcelDescriptor extends BaseDescriptorProps {
  /**
   * Manifest version
   */
  readonly manifestVersion: ParcelManifestVersion;

  /**
   * Parcel version
   */
  readonly version: string;

  /**
   * full parcel url = baseUrl + basePath + entry
   *
   * baseUrl where the parcel is deployed
   * if not specified, it will take the default path which is specified by the application
   */
  readonly baseUrl: string;

  /**
   * full parcel url = baseUrl + basePath + entry
   */
  readonly basePath: string;

  /**
   * This is the entry path for the parcel
   * full parcel url = baseUrl + basePath + entry
   */
  readonly entry: string;

  /**
   * This is the default parcel build type which is supported.
   *
   * As of now this is the only supported build type.
   * When we support more types we can add it here.
   *
   * if not specified defaults to federatedModuleWebpack
   */
  readonly buildType: "federatedModuleWebpack";

  /**
   * List of modules exposed as part of this parcel
   */
  readonly modules: Array<ModuleDescriptor>;

  /**
   * Performance Hints to optimize the parcel load
   */
  readonly performanceHints?: ParcelPerformanceHints;
}
