import { ArticlesState } from "./app-state";
import { AppState } from "./articles-state";

export type Store = {
  app: AppState;
  articles: ArticlesState;
};
