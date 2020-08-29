"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestParams = void 0;
//internal dependencies
const commonConstants = __importStar(require("../config/constants"));
const errorMessage_1 = require("../config/errorMessage");
/**
 * Message builder.
 * @param {Object} input The request object.
 * @param {Object} validation The validation rule based on path.
 */
const paramsValidator = (input, validation) => {
    const error = [];
    validation.map((obj) => {
        const { field, validate, errorMessage } = obj;
        if (!input[field]) {
            error.push({
                field: `{${field}}`,
                value: `{${input[field]}}`,
                error: errorMessage_1.ERROR_MESSAGE.GENERAL.FIELD_DOES_NOT_EXIT,
            });
        }
        if (input[field] && !validate(input[field])) {
            error.push({
                field: `{${field}}`,
                value: `{${input[field]}}`,
                error: `${errorMessage}`,
            });
        }
    });
    return error;
};
/**
 * Validate request params.
 * @param {Request} req The request object.
 * @param {Object} validator The validation rule based on path.
 */
exports.validateRequestParams = (req, validator) => {
    let error = [];
    const requestParamType = validator[req.route.path][req.method];
    let requestInput = {};
    if (requestParamType) {
        if (requestParamType[commonConstants.REQUEST_PARAMS.PATH_PARAMS]) {
            requestInput = req.params;
            error.push(...paramsValidator(requestInput, requestParamType[commonConstants.REQUEST_PARAMS.PATH_PARAMS]
                .validation));
        }
        if (requestParamType[commonConstants.REQUEST_PARAMS.QUERY_PARAMS]) {
            requestInput = req.query;
            error.push(...paramsValidator(requestInput, requestParamType[commonConstants.REQUEST_PARAMS.QUERY_PARAMS]
                .validation));
        }
        if (requestParamType[commonConstants.REQUEST_PARAMS.BODY_PARAMS]) {
            requestInput = req.body;
            error.push(...paramsValidator(requestInput, requestParamType[commonConstants.REQUEST_PARAMS.BODY_PARAMS]
                .validation));
        }
    }
    return error;
};
//# sourceMappingURL=validator.js.map