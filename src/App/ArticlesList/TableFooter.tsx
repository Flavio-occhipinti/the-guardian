import React from "react";
import ReactPaginate from "react-paginate";
import FontIcon from "../../shared/components/FontIcon";
import "./TableFooter.scss";

type Props = {
  totalElements: number;
  currentPage: number;
  onChangePage: (obj: any) => void;
  pages: number;
};
export default function TableFooter({
  totalElements,
  onChangePage,
  currentPage,
  pages,
}: Props) {
  return (
    <div className="table-footer">
      <div>{totalElements} elements</div>
      <div>
        <ReactPaginate
          previousLabel={<FontIcon name="arrow-left" />}
          nextLabel={<FontIcon name="arrow-right" />}
          breakLabel={"..."}
          forcePage={currentPage - 1}
          breakClassName={"break-me"}
          pageCount={pages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={onChangePage}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}
