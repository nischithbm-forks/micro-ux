import { ModuleRegistry, ParcelRegistry, ModuleLoader, ParcelLoader } from "..";

export default interface Application {
  getModuleRegistry: () => ModuleRegistry;
  getParcelRegistry: () => ParcelRegistry;
  getModuleLoader: () => ModuleLoader;
  getParcelLoader: () => ParcelLoader;
}
