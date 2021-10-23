import React from "react";
import "./FontIcon.scss";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  name:
    | "close"
    | "arrow-down"
    | "pencil"
    | "filter"
    | "cart"
    | "three-dots"
    | "plus"
    | "alert"
    | "facebook"
    | "search"
    | "linkedin"
    | "phone"
    | "menu"
    | "arrow"
    | "at"
    | "business"
    | "external-link"
    | "arrow-left"
    | "arrow-right";
};
export default function FontIcon({ name, className, ...props }: Props) {
  return <span className={`icon icon-${name} ${className}`} {...props}></span>;
}
