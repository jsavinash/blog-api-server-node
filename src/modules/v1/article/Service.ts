//internal dependencies
import { ArticleRepository } from "./Repository";
import {
  IArticleItem,
  IPagination,
  IGetResponeParams,
  IPutResponeParams,
  IGetByIdResponeParams,
} from "./Interface";

/**
 * Service class for article.
 */
export class ArticleService {
  constructor(protected articleRepository: ArticleRepository) {}

  /**
   * Get all articles.
   * @param {IPagination} pagination The pagination paramaters.
   */
  async findAll(data: IPagination): Promise<IGetResponeParams> {
    const articles = await this.articleRepository.findAll(data);
    const response: IGetResponeParams = {
      data: {
        value: articles,
      },
    };
    return response;
  }

  /**
   * Get article by id.
   * @param {String} articleId The article id.
   */
  async findById(articleId: string): Promise<IGetByIdResponeParams> {
    const articles = await this.articleRepository.findById(articleId);
    const response: IGetByIdResponeParams = {
      data: {
        value: articles,
      },
    };
    return response;
  }

  /**
   * Add article.
   * @param {IArticleItem} article the article parameters.
   */
  async addArticle(article: IArticleItem): Promise<IPutResponeParams> {
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

  /**
   * Update article.
   * @param {String} id the article id.
   * @param {IArticleItem} article the article parameters.
   */
  async updateArticle(
    id: string,
    article: IArticleItem
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
