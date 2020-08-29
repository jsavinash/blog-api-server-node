"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleValidator = void 0;
//internal dependencies
const validator_1 = require("../../../common/validator");
const Validator_1 = require("./Validator");
/**
 * Find article parameter validator middleware.
 */
const articleValidatorMiddleware = () => (req, res, next) => {
    const error = validator_1.validateRequestParams(req, Validator_1.articleRequestParamsValidator);
    if (Array.isArray(error) && error.length) {
        res.status(400).json({
            error,
        });
    }
    else {
        next();
    }
};
exports.articleValidator = () => {
    return articleValidatorMiddleware();
};
//# sourceMappingURL=Middleware.js.map