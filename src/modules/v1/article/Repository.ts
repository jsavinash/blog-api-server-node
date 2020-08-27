//external dependencies
import mongoose from "mongoose";

//internal dependencies
import { ArticleDocument, Article } from "../../../models/Article";
import { IArticle, IPagination } from "./Interface";

export class ArticleRepository {
  constructor(protected ArticleModel: mongoose.Model<ArticleDocument, {}>) {}
  async findAll(pagination: IPagination): Promise<IArticle[]> {
    const articleAggregatorPipline = [];
    const articleCount = await this.ArticleModel.count({});
    articleAggregatorPipline.push({
      $project: {
        id: "$_id",
        _id: 0,
        title: 1,
        image: 1,
        description: 1,
        publishDate: 1,
      },
    });
    if (pagination.limit) {
      articleAggregatorPipline.push({ $limit: Number(pagination.limit) });
    }
    if (pagination.page) {
      articleAggregatorPipline.push({
        $skip: articleCount * (Number(pagination.page) - 1),
      });
    }
    return this.ArticleModel.aggregate(articleAggregatorPipline);
  }

  async add(article: IArticle): Promise<any> {
    const newArticle = new Article(article);
    return await newArticle.save();
  }

  async update(id: string, article: IArticle): Promise<any> {
    return await Article.findByIdAndUpdate({ _id: id }, article);
  }
}
