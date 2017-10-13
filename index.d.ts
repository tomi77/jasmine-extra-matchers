/// <reference types="jasmine" />

declare namespace jasmine {
  interface Matchers<T> {
    /**
     * Checks whether a value is the instance of type.
     * @param {function} ctor
     * @return {boolean}
     */
    toBeInstanceOf(ctor: Function): boolean;

    /**
     * Checks whether a value is infinity.
     * @return {boolean}
     */
    toBeInfinity(): boolean;

    /**
     * Checks whether a value has own property.
     * @param {function} prop
     * @return {boolean}
     */
    hasOwnProperty(prop: string): boolean;

    /**
     * Checks whether the value is an even number.
     * @return {boolean}
     */
    toBeEven(): boolean;

    /**
     * Checks whether the value is an odd number.
     * @return {boolean}
     */
    toBeOdd(): boolean;

    /**
     * Checks whether the value contains a numeric value, regardless of its type. It can be a string containing a numeric value, exponential notation, a Number object, etc.
     * @return {boolean}
     */
    toBeNumeric(): boolean;

    /**
     * Checks whether the value is a numeric integer. A numeric value can be a string containing a number, a Number object, etc.
     * @return {boolean}
     */
    toBeInteger(): boolean;

    /**
     * Checks whether the value is a "float".
     * @return {boolean}
     */
    toBeFloat(): boolean;

    /**
     * Checks whether the value is a positive number.
     * @return {boolean}
     */
    toBePositive(): boolean;

    /**
     * Checks whether the value is a negative number.
     * @return {boolean}
     */
    toBeNegative(): boolean;

  }
}
