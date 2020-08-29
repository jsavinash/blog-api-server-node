import isNumber from "is-number";
import mongoose from "mongoose";

/**
 * Number validator.
 * @param {string} value The number.
 */
export const validateNumber = (value: string): boolean => {
  return isNumber(value);
};

/**
 * String length validator.
 * @param {string} value The string.
 */
export const isLength = (value: string): boolean => {
  return value.length > 1;
};

/**
 * MongoId validator.
 * @param {string} value The mongoId.
 */
 export const isValidMongoId = (value: string): boolean => {
  return mongoose.Types.ObjectId.isValid(value);
};
