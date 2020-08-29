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
exports.articleRequestParamsValidator = void 0;
//internal dependencies
const commonConstants = __importStar(require("../../../config/constants"));
const errorMessage_1 = require("../../../config/errorMessage");
const paramsValidation = __importStar(require("../../../common/paramsValidation"));
/**
 * Validation rule for route parameters.
 */
exports.articleRequestParamsValidator = {
    [commonConstants.Path.ARTICLE_WITH_PATH_PARAMS]: {
        [commonConstants.REQUEST_METHODS.GET]: {
            [commonConstants.REQUEST_PARAMS.PATH_PARAMS]: {
                validation: [
                    {
                        field: "page",
                        validate: paramsValidation.validateNumber,
                        errorMessage: errorMessage_1.ERROR_MESSAGE.ARTICLE.GET.PATH_PARAMS.PAGE,
                    },
                    {
                        field: "limit",
                        validate: paramsValidation.validateNumber,
                        errorMessage: errorMessage_1.ERROR_MESSAGE.ARTICLE.GET.PATH_PARAMS.LIMIT,
                    },
                ],
            },
        },
    },
    [commonConstants.Path.ARTICLE]: {
        [commonConstants.REQUEST_METHODS.PUT]: {
            [commonConstants.REQUEST_PARAMS.BODY_PARAMS]: {
                validation: [
                    {
                        field: "title",
                        validate: paramsValidation.isLength,
                        errorMessage: errorMessage_1.ERROR_MESSAGE.ARTICLE.PUT.BODY_PARAMS.TITLE_NOT_EMPTY,
                    },
                    {
                        field: "description",
                        validate: paramsValidation.isLength,
                        errorMessage: errorMessage_1.ERROR_MESSAGE.ARTICLE.PUT.BODY_PARAMS.DESCRIPTION_NOT_EMPTY,
                    },
                ],
            },
        },
    },
    [commonConstants.Path.ARTICLE_WITH_ID]: {
        [commonConstants.REQUEST_METHODS.PATCH]: {
            [commonConstants.REQUEST_PARAMS.PATH_PARAMS]: {
                validation: [
                    {
                        field: "id",
                        validate: paramsValidation.isValidMongoId,
                        errorMessage: errorMessage_1.ERROR_MESSAGE.ARTICLE.PATCH.PATH_PARAMS.ID,
                    },
                ],
            },
            [commonConstants.REQUEST_PARAMS.BODY_PARAMS]: {
                validation: [
                    {
                        field: "title",
                        validate: paramsValidation.isLength,
                        errorMessage: errorMessage_1.ERROR_MESSAGE.ARTICLE.PATCH.BODY_PARAMS.TITLE_NOT_EMPTY,
                    },
                    {
                        field: "description",
                        validate: paramsValidation.isLength,
                        errorMessage: errorMessage_1.ERROR_MESSAGE.ARTICLE.PATCH.BODY_PARAMS.DESCRIPTION_NOT_EMPTY,
                    },
                ],
            },
        },
    },
};
//# sourceMappingURL=Validator.js.map