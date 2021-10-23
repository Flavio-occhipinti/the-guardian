import Guardian from "guardian-js";
import { useState } from "hoist-non-react-statics/node_modules/@types/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Store } from "../shared/types/store";
import { getSearch } from "../store/actions";
import "./ArticlesList.scss";
import ArticleItemList from "./ArticlesList/ArticleItemList";
import TableFooter from "./ArticlesList/TableFooter";

const guardian = new Guardian("e3b4abec-95cf-4732-a2b1-63aa6b35f080", false);

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
            results?.map((item: any) => (
              <ArticleItemList key={item.id} article={item} />
            ))
          ) : (
            <tr>
              <td colSpan={4}>Server not responding</td>
            </tr>
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
