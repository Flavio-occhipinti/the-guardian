import Guardian from "guardian-js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Store } from "../shared/types/store";
import { getSearch } from "../store/actions";
import "./ArticlesList.scss";
import ArticleItemList from "./ArticlesList/ArticleItemList";
import TableFooter from "./ArticlesList/TableFooter";

const guardian = new Guardian(
  "e3b4abec-95cf-4732-a2b1-63aa6b35f080",
  process.env.NODE_ENV === "production"
);
type Props = {};
export default function ArticlesList({}: Props) {
  const { currentPage, pages, results, total } = useSelector(
    (state: Store) => state.articles.search
  );
  const [error, setError] = useState(false);

  const fetch = async (page?: number) => {
    try {
      const { body } = (await guardian.content.search("it", {
        page: page ? page + 1 : 1,
      })) as any;
      const { response } = JSON.parse(body);
      getSearch(response);
      setError(false);
    } catch (e) {
      setError(true);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  const onChangePage = ({ selected }: { selected: number }) => {
    fetch(selected);
  };

  return (
    <div className="articles-list">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Section</th>
            <th>Type</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td colSpan={4} className="error-line">
                Server not responding
              </td>
            </tr>
          ) : (
            results?.map((item: any) => (
              <ArticleItemList key={item.id} article={item} />
            ))
          )}
        </tbody>
      </table>
      <TableFooter
        currentPage={currentPage}
        onChangePage={onChangePage}
        totalElements={total}
        pages={pages}
      />
    </div>
  );
}
