"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REQUEST_PARAMS = exports.REQUEST_METHODS = exports.Path = exports.VERSION = void 0;
/**
 * API version.
 */
exports.VERSION = {
    V1: "v1",
};
/**
 * API path name.
 */
exports.Path = {
    ARTICLE_WITH_PATH_PARAMS: `/api/${exports.VERSION.V1}/article/:limit/:page`,
    ARTICLE: `/api/${exports.VERSION.V1}/article`,
    ARTICLE_WITH_ID: `/api/${exports.VERSION.V1}/article/:id`,
};
/**
 * Method type.
 */
exports.REQUEST_METHODS = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
};
/**
 * Request params.
 */
var REQUEST_PARAMS;
(function (REQUEST_PARAMS) {
    REQUEST_PARAMS["PATH_PARAMS"] = "pathParams";
    REQUEST_PARAMS["BODY_PARAMS"] = "bodyParams";
    REQUEST_PARAMS["QUERY_PARAMS"] = "queryParams";
})(REQUEST_PARAMS = exports.REQUEST_PARAMS || (exports.REQUEST_PARAMS = {}));
//# sourceMappingURL=constants.js.map