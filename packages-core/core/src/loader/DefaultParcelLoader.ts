import {
  ParcelDescriptor,
  ParcelLoader,
  ParcelRegistry,
} from "@micro-ux/specs";
import fetchJavaScriptFromUrl from "./utils/fetchJavaScriptFromUrl";

// TODO: ApplicationDescriptor can be the parent for Parcel?

export default class DefaultParcelLoader implements ParcelLoader {
  private loadStatus = new Map<string, boolean>();
  private parcelRegistry: ParcelRegistry;

  constructor(parcelRegistry: ParcelRegistry) {
    this.parcelRegistry = parcelRegistry;
  }

  getParcelUrl(parcelDescriptor: ParcelDescriptor) {
    return `${parcelDescriptor.baseUrl}/${parcelDescriptor.basePath}/${parcelDescriptor.entry}`;
  }

  load(parcelId: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        if (this.loadStatus.get(parcelId) === true) {
          resolve();
          return;
        }
        const parcelDescriptor = this.parcelRegistry.get(parcelId);
        if (!parcelDescriptor) {
          reject(`parcelDescriptor not registered for parcelId=${parcelId}`);
          return;
        }
        await fetchJavaScriptFromUrl(this.getParcelUrl(parcelDescriptor));
        this.loadStatus.set(parcelId, true);
        resolve();
      } catch (error) {
        console.error("error fetching module - network error", error);
        reject(error);
      }
    });
  }
}
