import { Request } from "express";

export const paginationParamsValidator = (req: Request) => {
    const { limit, page } = req.params;
    const error = [];
    if(!(Number(limit) > 0)){
        error.push({
            message: "{limit} paramter should be integer"
        });
    }
    if(!(Number(page) > 0)){
        error.push({
            message: "{page} paramter should be integer"
        });
    }
    return error;
};