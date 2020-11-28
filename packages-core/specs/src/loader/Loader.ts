export default interface Loader {
  load: (key: string) => Promise<any>;
}
