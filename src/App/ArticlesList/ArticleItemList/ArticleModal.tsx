import React from "react";
import { Article } from "../../../shared/types/article";
import "./ArticleModal.scss";

type Props = { article: Article };
export default function ArticleModal({ article }: Props) {
  return (
    <div className="article-modal">
      <div className="title">{article.webTitle}</div>
      <div className="info-wrapper">
        <div>
          <span> Section :</span>
          {article.sectionName}
        </div>
        <div className="right">
          <span>Publication date :</span>{" "}
          {new Date(article.webPublicationDate).toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
        <div>
          <span>Type : </span>
          {article.pillarName}
        </div>

        <div className="right">
          <a className="button" href={article.webUrl} target="_blank">
            See article
          </a>
        </div>
      </div>
    </div>
  );
}
