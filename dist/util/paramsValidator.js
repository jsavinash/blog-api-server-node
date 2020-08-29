"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationParamsValidator = void 0;
exports.paginationParamsValidator = (req) => {
    const { limit, page } = req.params;
    const error = [];
    if (!(Number(limit) > 0)) {
        error.push({
            message: "{limit} paramter should be integer"
        });
    }
    if (!(Number(page) > 0)) {
        error.push({
            message: "{page} paramter should be integer"
        });
    }
    return error;
};
//# sourceMappingURL=paramsValidator.js.map