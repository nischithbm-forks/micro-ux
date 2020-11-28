export default interface Registry<RecordType> {
  get: (key: string) => RecordType | undefined;
}
