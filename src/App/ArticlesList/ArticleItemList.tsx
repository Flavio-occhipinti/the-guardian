import React from "react";
import FontIcon from "../../shared/components/FontIcon";
import { Article } from "../../shared/types/article";
import { openModal } from "../../store/actions";
import "./ArticleItemList.scss";
import ArticleModal from "./ArticleItemList/ArticleModal";

type Props = { article: Article };
export default function ArticleItemList({ article }: Props) {
  const openArticle = () => {
    openModal({
      title: "Article",
      size: "full",
      content: <ArticleModal article={article} />,
    });
  };

  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };

  return (
    <tr className="article-item-list" key={article.id} onClick={openArticle}>
      <td>{article.webTitle}</td>
      <td>{article.sectionName}</td>
      <td>{article.pillarName}</td>
      <td>
        <a href={article.webUrl} onClick={stopPropagation} target="_blank">
          <FontIcon name="external-link" />
        </a>
      </td>
    </tr>
  );
}
