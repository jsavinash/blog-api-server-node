//internal dependencies
import { ArticleRepository } from "./Repository";
import {
  IArticle,
  IPagination,
  IGetResponeParams,
  IPutResponeParams,
} from "./Interface";

export class ArticleService {
  constructor(protected articleRepository: ArticleRepository) {}
  async findAll(data: IPagination): Promise<IGetResponeParams> {
    const articles = await this.articleRepository.findAll(data);
    const response: IGetResponeParams = {
      data: {
        value: articles,
      },
    };
    return response;
  }
  async addArticle(article: IArticle): Promise<IPutResponeParams> {
    const newArticle = await this.articleRepository.add(article);
    const response: IPutResponeParams = {
      data: {
        value: {
          id: newArticle._id,
        },
      },
    };
    return response;
  }

  async updateArticle(
    id: string,
    article: IArticle
  ): Promise<IPutResponeParams> {
    const updatedArticle = await this.articleRepository.update(id, article);
    const response: IPutResponeParams = {
      data: {
        value: {
          id: updatedArticle._id,
        },
      },
    };
    return response;
  }
}
