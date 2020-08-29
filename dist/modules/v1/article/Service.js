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
exports.ArticleService = void 0;
/**
 * Service class for article.
 */
class ArticleService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    /**
     * Get all articles.
     * @param {IPagination} pagination The pagination paramaters.
     */
    findAll(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const articles = yield this.articleRepository.findAll(data);
            const response = {
                data: {
                    value: articles,
                },
            };
            return response;
        });
    }
    /**
     * Get article by id.
     * @param {String} articleId The article id.
     */
    findById(articleId) {
        return __awaiter(this, void 0, void 0, function* () {
            const articles = yield this.articleRepository.findById(articleId);
            const response = {
                data: {
                    value: articles,
                },
            };
            return response;
        });
    }
    /**
     * Add article.
     * @param {IArticleItem} article the article parameters.
     */
    addArticle(article) {
        return __awaiter(this, void 0, void 0, function* () {
            const newArticle = yield this.articleRepository.add(article);
            const response = {
                data: {
                    value: {
                        id: newArticle._id,
                    },
                },
            };
            return response;
        });
    }
    /**
     * Update article.
     * @param {String} id the article id.
     * @param {IArticleItem} article the article parameters.
     */
    updateArticle(id, article) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedArticle = yield this.articleRepository.update(id, article);
            const response = {
                data: {
                    value: {
                        id: updatedArticle._id,
                    },
                },
            };
            return response;
        });
    }
}
exports.ArticleService = ArticleService;
//# sourceMappingURL=Service.js.map