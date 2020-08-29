/**
 * Method based error message.
 */
export const ERROR_MESSAGE = {
  GENERAL: {
    FIELD_DOES_NOT_EXIT: "Field Doesn't exist",
  },
  ARTICLE: {
    GET: {
      PATH_PARAMS: {
        PAGE: "Page Number should be non negative integer",
        LIMIT: "Limit should be non negative integer",
      },
    },
    PUT: {
      BODY_PARAMS: {
        TITLE_NOT_EMPTY: "Title can't be empty",
        DESCRIPTION_NOT_EMPTY: "Description can't be empty",
      },
    },
    PATCH: {
      PATH_PARAMS: {
        ID: "Not a valid MongoID",
      },
      BODY_PARAMS: {
        TITLE_NOT_EMPTY: "Title can't be empty",
        DESCRIPTION_NOT_EMPTY: "Description can't be empty",
      },
    },
  },
};
