export default interface ParcelPerformanceHints {
  /**
   * preload parcel if this parcel would be needed in a given route.
   * this is to be used if the parcel is one of the critical resources to be loaded for rendering meaningful content to the user.
   * Else considering using `prefetchOnRoutes`
   */
  readonly preloadOnRoutes?: Array<string>;

  /**
   * prefetch parcel if this parcel would be needed
   * in a given route but can be deferred loading until the route navigation is complete.
   * parcel will be loaded only after the page is successfully loaded.
   */
  readonly prefetchOnRoutes?: Array<string>;
}
