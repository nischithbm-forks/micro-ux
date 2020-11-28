/**
 * BaseDescriptorProps which is common across all descriptors
 */
export default interface BaseDescriptorProps {
  /**
   * id must be unique across application
   *
   * Note: If there are duplicate moduleId in the application scope, module will not be loaded at all.
   * Can only have alphanumeric charcters and `_` (no other special characters allowed).
   * Should always start with an alphabet.
   * Should only contain lowercase letters.
   *
   * TODO: Validations need to be added
   */
  readonly id: string;

  /**
   * extraProperties - holds any additional properties which needs to be supplied.
   * This is provided to make the desciptor extensible to solve specific usecases.
   * Ideally we need to avoid usage of this and provide standard descriptor prop for common use cases.
   */
  readonly extraProperties?: Record<string, any>;

  /**
   * experimentalFlags - to support for any experimental features.
   * This is provided to make the desciptor extensible to solve specific usecases.
   * Eventually, these need to move into standard descriptor props.
   */
  readonly experimentalFlags?: Record<string, any>;
}
