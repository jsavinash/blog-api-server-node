"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleRoutes = void 0;
//internal dependencies
const commonConstants = __importStar(require("../../../config/constants"));
const Article_1 = require("../../../models/Article");
const Repository_1 = require("./Repository");
const Service_1 = require("./Service");
const Controller_1 = require("./Controller");
const Middleware_1 = require("./Middleware");
/**
 * Route class for article.
 */
class ArticleRoutes {
    static map(app) {
        const articleController = new Controller_1.ArticleController(new Service_1.ArticleService(new Repository_1.ArticleRepository(Article_1.Article)));
        app.get(commonConstants.Path.ARTICLE_WITH_PATH_PARAMS, Middleware_1.articleValidator(), articleController.getArticle());
        app.get(commonConstants.Path.ARTICLE_WITH_ID, Middleware_1.articleValidator(), articleController.getArticleById());
        app.put(commonConstants.Path.ARTICLE, Middleware_1.articleValidator(), articleController.addArticle());
        app.patch(commonConstants.Path.ARTICLE_WITH_ID, Middleware_1.articleValidator(), articleController.updateArticle());
    }
}
exports.ArticleRoutes = ArticleRoutes;
//# sourceMappingURL=Route.js.map