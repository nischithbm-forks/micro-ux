import {
  ModuleRegistry,
  ParcelRegistry,
  ModuleLoader,
  ParcelLoader,
  Application,
} from "@micro-ux/specs";

import { DefaultModuleRegistry, DefaultParcelRegistry } from "../registry";
import { DefaultModuleLoader, DefaultParcelLoader } from "../loader";

export interface ApplicationConstructorOptions {
  moduleRegistry?: ModuleRegistry;
  parcelRegistry?: ParcelRegistry;
  moduleLoader?: ModuleLoader;
  parcelLoader?: ParcelLoader;
}

export default class DefaultApplication implements Application {
  // eslint-disable-next-line no-unused-vars
  private options: ApplicationConstructorOptions;
  private moduleRegistry: ModuleRegistry;
  private parcelRegistry: ParcelRegistry;
  private moduleLoader: ModuleLoader;
  private parcelLoader: ParcelLoader;

  constructor(options?: ApplicationConstructorOptions) {
    this.options = options || {};
    this.moduleRegistry = options.moduleRegistry || new DefaultModuleRegistry();
    this.parcelRegistry =
      options.parcelRegistry || new DefaultParcelRegistry(this.moduleRegistry);

    this.parcelLoader =
      options.parcelLoader || new DefaultParcelLoader(this.parcelRegistry);

    this.moduleLoader =
      options.moduleLoader ||
      new DefaultModuleLoader(this.moduleRegistry, this.parcelLoader);

    console.log("Initializing application");
  }

  getModuleRegistry(): ModuleRegistry {
    return this.moduleRegistry;
  }

  getParcelRegistry(): ParcelRegistry {
    return this.parcelRegistry;
  }

  getModuleLoader(): ModuleLoader {
    return this.moduleLoader;
  }

  getParcelLoader(): ParcelLoader {
    return this.parcelLoader;
  }
}
