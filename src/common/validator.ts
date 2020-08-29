//external dependencies
import * as express from "express";

//internal dependencies
import * as commonConstants from "../config/constants";
import * as commonInterface from "./interface";
import { ERROR_MESSAGE } from "../config/errorMessage";

/**
 * Message builder.
 * @param {Object} input The request object.
 * @param {Object} validation The validation rule based on path.
 */
const paramsValidator = (
  input: { [key: string]: unknown },
  validation: commonInterface.IValidator[]
) => {
  const error: commonInterface.IParamsError[] = [];
  validation.map((obj: commonInterface.IValidator) => {
    const { field, validate, errorMessage } = obj;
    if (!input[field]) {
      error.push({
        field: `{${field}}`,
        value: `{${input[field]}}`,
        error: ERROR_MESSAGE.GENERAL.FIELD_DOES_NOT_EXIT,
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
export const validateRequestParams = (
  req: express.Request,
  validator: Object & commonInterface.IRequestParamsValidator
): commonInterface.IParamsError[] => {
  let error: commonInterface.IParamsError[] = [];
  const requestParamType = validator[req.route.path][req.method];
  let requestInput = {};
  if (requestParamType) {
    if (requestParamType[commonConstants.REQUEST_PARAMS.PATH_PARAMS]) {
      requestInput = req.params;
      error.push(
        ...paramsValidator(
          requestInput,
          requestParamType[commonConstants.REQUEST_PARAMS.PATH_PARAMS]
            .validation
        )
      );
    }
    if (requestParamType[commonConstants.REQUEST_PARAMS.QUERY_PARAMS]) {
      requestInput = req.query;
      error.push(
        ...paramsValidator(
          requestInput,
          requestParamType[commonConstants.REQUEST_PARAMS.QUERY_PARAMS]
            .validation
        )
      );
    }
    if (requestParamType[commonConstants.REQUEST_PARAMS.BODY_PARAMS]) {
      requestInput = req.body;
      error.push(
        ...paramsValidator(
          requestInput,
          requestParamType[commonConstants.REQUEST_PARAMS.BODY_PARAMS]
            .validation
        )
      );
    }
  }
  return error;
};
