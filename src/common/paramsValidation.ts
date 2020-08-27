import isNumber from "is-number";
import mongoose from "mongoose";

export const validateNumber = (value: string): boolean => {
  return isNumber(value);
};

export const isLength = (value: string): boolean => {
  return value.length > 1;
};

export const isValidMongoId = (value: string): boolean => {
  return mongoose.Types.ObjectId.isValid(value);
};
