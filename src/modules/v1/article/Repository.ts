//external dependencies
import mongoose from "mongoose";

//internal dependencies
import { ArticleDocument, Article } from "../../../models/Article";
import { IArticle, IPagination, IArticleItem } from "./Interface";

/**
 * Repository class for article collection.
 */
export class ArticleRepository {
  constructor(protected ArticleModel: mongoose.Model<ArticleDocument, {}>) {}

  /**
   * Find data from article collection.
   * @param {IPagination} pagination The pagination paramaters.
   */
  async findAll(pagination: IPagination): Promise<IArticle> {
    const articleAggregatorPipline = [];
    const articleCount = await this.ArticleModel.count({});
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

    const articles = await this.ArticleModel.aggregate(
      articleAggregatorPipline
    );
    return new Promise((resolve) => {
      resolve({
        articles,
        count: articleCount,
      });
    });
  }

  /**
   * Find data by id from article collection.
   * @param {String} id The article id.
   */
  async findById(id: string): Promise<IArticleItem> {
    return await this.ArticleModel.findOne({ _id: id });
  }

  /**
   * Add data in article collection.
   * @param {IArticleItem} article The article id.
   */
  async add(article: IArticleItem): Promise<any> {
    article.id = (await this.ArticleModel.count({})) + 1;
    const newArticle = new Article(article);
    return await newArticle.save();
  }

  /**
   * Update data by id in article collection.
   * @param {IArticleItem} article The article id.
   * @param {String} id The article id.
   */
  async update(id: string, article: IArticleItem): Promise<any> {
    return await Article.findByIdAndUpdate({ _id: id }, article);
  }
}
