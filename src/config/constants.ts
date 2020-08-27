/**
 * Version.
 */
export const VERSION = {
  V1: "v1",
};
/**
 * API path name.
 */
export const Path = {
  ARTICLE_WITH_PATH_PARAMS: `/api/${VERSION.V1}/article/:limit/:page`,
  ARTICLE: `/api/${VERSION.V1}/article`,
  ARTICLE_WITH_ID: `/api/${VERSION.V1}/article/:id`,
};

/**
 * Method type.
 */ export const REQUEST_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
};

export enum REQUEST_PARAMS {
  PATH_PARAMS = "pathParams",
  BODY_PARAMS = "bodyParams",
  QUERY_PARAMS = "queryParams",
}
