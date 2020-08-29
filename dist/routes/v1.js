"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiV1 = void 0;
const Route_1 = require("../modules/v1/article/Route");
const apiVersionV1Middleware = (app) => (req, res, next) => {
    Route_1.ArticleRoutes.map(app);
    next();
};
exports.apiV1 = (app) => {
    return apiVersionV1Middleware(app);
};
//# sourceMappingURL=v1.js.map