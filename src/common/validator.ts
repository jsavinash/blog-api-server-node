import * as express from "express";

import * as commonConstants from "../config/constants";
import * as commonInterface from "./interface";
import { ERROR_MESSAGE } from "../config/errorMessage";

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

export const validateRequestParams = (
  req: express.Request,
  validator: Object & commonInterface.IRequestParamsValidator
): commonInterface.IParamsError[] => {
  let error: commonInterface.IParamsError[] = [];
  const requestParamType = validator[req.route.path][req.method];
  let requestInput = {};
  if (requestParamType) {
    const paramValidation = (
      requestParamType[commonConstants.REQUEST_PARAMS.PATH_PARAMS] ||
      requestParamType[commonConstants.REQUEST_PARAMS.QUERY_PARAMS] ||
      requestParamType[commonConstants.REQUEST_PARAMS.BODY_PARAMS]
    ).validation;
    if (requestParamType[commonConstants.REQUEST_PARAMS.PATH_PARAMS]) {
      requestInput = req.params;
    } else if (requestParamType[commonConstants.REQUEST_PARAMS.BODY_PARAMS]) {
      requestInput = req.body;
    } else {
      requestInput = req.query;
    }
    error = paramsValidator(requestInput, paramValidation);
  }
  return error;
};
