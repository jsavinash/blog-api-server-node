//internal dependencies
import * as commonConstants from "../../../config/constants";
import { ERROR_MESSAGE } from "../../../config/errorMessage";
import * as paramsValidation from "../../../common/paramsValidation";

/**
 * Validation rule for route parameters.
 */
export const articleRequestParamsValidator = {
  [commonConstants.Path.ARTICLE_WITH_PATH_PARAMS]: {
    [commonConstants.REQUEST_METHODS.GET]: {
      [commonConstants.REQUEST_PARAMS.PATH_PARAMS]: {
        validation: [
          {
            field: "page",
            validate: paramsValidation.validateNumber,
            errorMessage: ERROR_MESSAGE.ARTICLE.GET.PATH_PARAMS.PAGE,
          },
          {
            field: "limit",
            validate: paramsValidation.validateNumber,
            errorMessage: ERROR_MESSAGE.ARTICLE.GET.PATH_PARAMS.LIMIT,
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
            errorMessage: ERROR_MESSAGE.ARTICLE.PUT.BODY_PARAMS.TITLE_NOT_EMPTY,
          },
          {
            field: "description",
            validate: paramsValidation.isLength,
            errorMessage:
              ERROR_MESSAGE.ARTICLE.PUT.BODY_PARAMS.DESCRIPTION_NOT_EMPTY,
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
            errorMessage: ERROR_MESSAGE.ARTICLE.PATCH.PATH_PARAMS.ID,
          },
        ],
      },
      [commonConstants.REQUEST_PARAMS.BODY_PARAMS]: {
        validation: [
          {
            field: "title",
            validate: paramsValidation.isLength,
            errorMessage:
              ERROR_MESSAGE.ARTICLE.PATCH.BODY_PARAMS.TITLE_NOT_EMPTY,
          },
          {
            field: "description",
            validate: paramsValidation.isLength,
            errorMessage:
              ERROR_MESSAGE.ARTICLE.PATCH.BODY_PARAMS.DESCRIPTION_NOT_EMPTY,
          },
        ],
      },
    },
  },
};
