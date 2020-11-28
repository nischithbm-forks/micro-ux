import { ParcelDescriptor, Application } from "@micro-ux/specs";
import {
  DefaultApplication,
  ApplicationConstructorOptions,
} from "@micro-ux/core";

import poll from "@micro-ux/micro-dash.poll";

export interface IntitalizerOptions extends ApplicationConstructorOptions {
  parcelDescriptors?: Array<ParcelDescriptor>;
  [propName: string]: any;
}

let app: Application;
export const init = async function (options?: IntitalizerOptions) {
  app = new DefaultApplication(options);
  if (options.parcelDescriptors) {
    app.getParcelRegistry().registerMultiple(options.parcelDescriptors);
  }
};

export const getApplication = async function (): Promise<Application> {
  return new Promise((resolve, reject) => {
    poll({
      shouldPollingStop: function () {
        return !!app;
      },
      onSuccess: function () {
        resolve(app);
      },
      onRetryLimitExceeded: function () {
        reject("Timedout waiting for app to initialize");
      },
      intervalInMillis: 100,
      maxRetries: 50, // 5 seconds
    });
  });
};

export const loadModule = async function (moduleId) {
  return getApplication().then(function (app) {
    return app.getModuleLoader().load(moduleId);
  });
};
