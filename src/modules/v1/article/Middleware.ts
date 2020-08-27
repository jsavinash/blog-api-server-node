import * as express from "express";
import { validateRequestParams } from "../../../common/validator";
import { articleRequestParamsValidator } from "./Validator";

const articleValidatorMiddleware = (app: express.Application) => (
  req: express.Request,
  res: express.Response,
  next: () => express.NextFunction
) => {
  const error = validateRequestParams(req, articleRequestParamsValidator);
  if (Array.isArray(error) && error.length) {
    res.status(400).json({
      error,
    });
  } else {
    next();
  }
};

export const articleValidator = (app: express.Application) => {
  return articleValidatorMiddleware(app);
};
