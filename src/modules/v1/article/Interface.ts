/**
 * Article item interface.
 */
export interface IArticleItem {
  _id?: string;
  id?: number;
  title?: string;
  image?: string;
  description?: string;
  publishDate?: Date;
}

/**
 * Article interface.
 */
export interface IArticle {
  articles: IArticleItem[];
  count: number;
}

/**
 * Get article method response interface.
 */
export interface IGetResponeParams {
  data: {
    value: IArticle;
  };
}

/**
 * Get article by id method response interface.
 */
export interface IGetByIdResponeParams {
  data: {
    value: IArticleItem;
  };
}

/**
 * Put article method response interface.
 */
export interface IPutResponeParams {
  data: {
    value: {
      id: string;
    };
  };
}

/**
 * Patch article by id method response interface.
 */
export interface IPatchResponeParams {
  data: {
    value: {
      id: string;
    };
  };
}

/**
 * Pagination interface.
 */
export interface IPagination {
  page: string;
  limit: string;
}
