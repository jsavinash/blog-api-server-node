//external dependencies
import * as express from "express";

//internal dependencies
import * as commonConstants from "../../../config/constants";
import { Article as ArticleModel } from "../../../models/Article";
import { ArticleRepository } from "./Repository";
import { ArticleService } from "./Service";
import { ArticleController } from "./Controller";
import { articleValidator } from "./Middleware";

export class ArticleRoutes {
  static map(app: express.Application): void {
    const articleController = new ArticleController(
      new ArticleService(new ArticleRepository(ArticleModel))
    );
    app.get(
      commonConstants.Path.ARTICLE_WITH_PATH_PARAMS,
      articleValidator(app),
      articleController.getArticle()
    );
    app.put(
      commonConstants.Path.ARTICLE,
      articleValidator(app),
      articleController.addArticle()
    );
    app.patch(
      commonConstants.Path.ARTICLE_WITH_ID,
      articleValidator(app),
      articleController.updateArticle()
    );
  }
}
