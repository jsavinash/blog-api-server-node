export interface IArticle {
  _id?: string;
  title?: string;
  image?: string;
  description?: string;
  publishDate?: Date; 
}

export interface IGetRequestParams {}

export interface IGetResponeParams {
    data: {
    value: IArticle[];
  };
}

export interface IPutRequestParams {}

export interface IPutResponeParams {
  data: {
    value: {
      id: string
    };
  };
}

export interface IPatchRequestParams {}

export interface IPatchResponeParams {
  data: {
    value: {
      id: string
    };
  };
}

export interface IPagination {
    page: string;
    limit: string;
  
}