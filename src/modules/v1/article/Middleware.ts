//external dependencies
import { Application, Request, Response, NextFunction } from "express";

//internal dependencies
import { validateRequestParams } from "../../../common/validator";
import { articleRequestParamsValidator } from "./Validator";

/**
 * Find article parameter validator middleware.
 */
const articleValidatorMiddleware = () => (
  req: Request,
  res: Response,
  next: () => NextFunction
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

export const articleValidator = () => {
  return articleValidatorMiddleware();
};
