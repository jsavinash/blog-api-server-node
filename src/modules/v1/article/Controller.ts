//external dependencies
import { Request, Response } from "express";

//internal dependencies
import { ArticleService } from "./Service";
import {
  IPagination,
  IGetResponeParams,
  IPutResponeParams,
  IPatchResponeParams,
  IArticleItem,
  IGetByIdResponeParams,
} from "./Interface";

/**
 * Controller class for article.
 */
export class ArticleController {
  constructor(protected articleService: ArticleService) {}

  /**
   * Get all articles.
   */
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

  /**
   * Get article by id.
   */
  getArticleById() {
    return async (req: Request, res: Response) => {
      const { id } = req.params;
      const response: IGetByIdResponeParams = await this.articleService.findById(
        id
      );
      res.status(200).json(response);
    };
  }

  /**
   * Add article.
   */
  addArticle() {
    return async (req: Request, res: Response) => {
      const { title, description, image, publishDate } = req.body;
      const newArticle: IArticleItem = {
        title,
        description,
        image,
        publishDate,
      };
      const response: IPutResponeParams = await this.articleService.addArticle(
        newArticle
      );
      res.status(200).json(response);
    };
  }

  /**
   * Update article.
   */
  updateArticle() {
    return async (req: Request, res: Response) => {
      const { id } = req.params;
      const { title, description, image, publishDate } = req.body;
      const updateArticle: IArticleItem = {
        title,
        description,
        image,
        publishDate,
      };
      const response: IPatchResponeParams = await this.articleService.updateArticle(
        id,
        updateArticle
      );
      res.status(200).json(response);
    };
  }
}
