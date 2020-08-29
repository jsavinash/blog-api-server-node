
export interface IParamsError {
  field: string;
  value: string;
  error: string;
}
export interface IValidator {
  field: string;
  validate: Function;
  errorMessage: string;
}

export interface IRequestParamsValidator {
  [key : string]: {
    [key: string]: {
      [key: string]: {
        validation: IValidator[];
      };
    };
  };
}
