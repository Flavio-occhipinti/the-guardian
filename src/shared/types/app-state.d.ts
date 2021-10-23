import { Article } from "./article";

export type ArticlesState = {
  search: {
    currentPage: number;
    orderBy: "relevance";
    pageSize: number;
    pages: number;
    results: Article[];
    startIndex: number;
    status: string;
    total: number;
    userTier: string;
  };
};
