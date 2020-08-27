//external dependencies
import { Request, Response } from "express";

//internal dependencies
import { ArticleService } from "./Service";
import {
  IPagination,
  IGetResponeParams,
  IPutResponeParams,
  IPatchResponeParams,
  IArticle,
} from "./Interface";

export class ArticleController {
  constructor(protected articleService: ArticleService) {}
  getArticle() {
    return async (req: Request, res: Response) => {
      const { limit, page } = req.params;
      const pagination: IPagination = {
        limit,
        page,
      };
      const response: IGetResponeParams = await this.articleService.findAll(
        pagination
      );
      res.status(200).json(response);
    };
  }
  addArticle() {
    return async (req: Request, res: Response) => {
      const { title, description } = req.body;
      const newArticle: IArticle = {
        title,
        description,
      };
      const response: IPutResponeParams = await this.articleService.addArticle(
        newArticle
      );
      res.status(200).json(response);
    };
  }
  updateArticle() {
    return async (req: Request, res: Response) => {
      const { id } = req.params;
      const { title, description } = req.body;
      const updateArticle: IArticle = {
        title,
        description,
      };
      const response: IPatchResponeParams = await this.articleService.updateArticle(
        id,
        updateArticle
      );
      res.status(200).json(response);
    };
  }
}
