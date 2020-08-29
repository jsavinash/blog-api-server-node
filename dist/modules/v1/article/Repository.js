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
exports.ArticleRepository = void 0;
//internal dependencies
const Article_1 = require("../../../models/Article");
/**
 * Repository class for article collection.
 */
class ArticleRepository {
    constructor(ArticleModel) {
        this.ArticleModel = ArticleModel;
    }
    /**
     * Find data from article collection.
     * @param {IPagination} pagination The pagination paramaters.
     */
    findAll(pagination) {
        return __awaiter(this, void 0, void 0, function* () {
            const articleAggregatorPipline = [];
            const articleCount = yield this.ArticleModel.count({});
            articleAggregatorPipline.push({
                $project: {
                    article_id: "$_id",
                    id: 1,
                    _id: 0,
                    title: 1,
                    image: 1,
                    description: 1,
                    publishDate: 1,
                },
            });
            if (pagination.page) {
                articleAggregatorPipline.push({
                    $skip: Number(pagination.limit) * (Number(pagination.page) - 1),
                });
            }
            if (pagination.limit) {
                articleAggregatorPipline.push({ $limit: Number(pagination.limit) });
            }
            const articles = yield this.ArticleModel.aggregate(articleAggregatorPipline);
            return new Promise((resolve) => {
                resolve({
                    articles,
                    count: articleCount,
                });
            });
        });
    }
    /**
     * Find data by id from article collection.
     * @param {String} id The article id.
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ArticleModel.findOne({ _id: id });
        });
    }
    /**
     * Add data in article collection.
     * @param {IArticleItem} article The article id.
     */
    add(article) {
        return __awaiter(this, void 0, void 0, function* () {
            article.id = (yield this.ArticleModel.count({})) + 1;
            const newArticle = new Article_1.Article(article);
            return yield newArticle.save();
        });
    }
    /**
     * Update data by id in article collection.
     * @param {IArticleItem} article The article id.
     * @param {String} id The article id.
     */
    update(id, article) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Article_1.Article.findByIdAndUpdate({ _id: id }, article);
        });
    }
}
exports.ArticleRepository = ArticleRepository;
//# sourceMappingURL=Repository.js.map