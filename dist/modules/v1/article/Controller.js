"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
/**
 * Controller class for article.
 */
class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    /**
     * Get all articles.
     */
    getArticle() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { limit, page } = req.params;
            const pagination = {
                limit,
                page,
            };
            const response = yield this.articleService.findAll(pagination);
            res.status(200).json(response);
        });
    }
    /**
     * Get article by id.
     */
    getArticleById() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const response = yield this.articleService.findById(id);
            res.status(200).json(response);
        });
    }
    /**
     * Add article.
     */
    addArticle() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { title, description, image, publishDate } = req.body;
            const newArticle = {
                title,
                description,
                image,
                publishDate,
            };
            const response = yield this.articleService.addArticle(newArticle);
            res.status(200).json(response);
        });
    }
    /**
     * Update article.
     */
    updateArticle() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, description, image, publishDate } = req.body;
            const updateArticle = {
                title,
                description,
                image,
                publishDate,
            };
            const response = yield this.articleService.updateArticle(id, updateArticle);
            res.status(200).json(response);
        });
    }
}
exports.ArticleController = ArticleController;
//# sourceMappingURL=Controller.js.map