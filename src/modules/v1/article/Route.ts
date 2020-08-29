//external dependencies
import { Application } from "express";

//internal dependencies
import * as commonConstants from "../../../config/constants";
import { Article as ArticleModel } from "../../../models/Article";
import { ArticleRepository } from "./Repository";
import { ArticleService } from "./Service";
import { ArticleController } from "./Controller";
import { articleValidator } from "./Middleware";

/**
 * Route class for article.
 */
export class ArticleRoutes {
  static map(app: Application): void {
    const articleController = new ArticleController(
      new ArticleService(new ArticleRepository(ArticleModel))
    );
    app.get(
      commonConstants.Path.ARTICLE_WITH_PATH_PARAMS,
      articleValidator(),
      articleController.getArticle()
    );
    app.get(
      commonConstants.Path.ARTICLE_WITH_ID,
      articleValidator(),
      articleController.getArticleById()
    );
    app.put(
      commonConstants.Path.ARTICLE,
      articleValidator(),
      articleController.addArticle()
    );
    app.patch(
      commonConstants.Path.ARTICLE_WITH_ID,
      articleValidator(),
      articleController.updateArticle()
    );
  }
}
