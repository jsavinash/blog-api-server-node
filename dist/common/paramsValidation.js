"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidMongoId = exports.isLength = exports.validateNumber = void 0;
const is_number_1 = __importDefault(require("is-number"));
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * Number validator.
 * @param {string} value The number.
 */
exports.validateNumber = (value) => {
    return is_number_1.default(value);
};
/**
 * String length validator.
 * @param {string} value The string.
 */
exports.isLength = (value) => {
    return value.length > 1;
};
/**
 * MongoId validator.
 * @param {string} value The mongoId.
 */
exports.isValidMongoId = (value) => {
    return mongoose_1.default.Types.ObjectId.isValid(value);
};
//# sourceMappingURL=paramsValidation.js.map