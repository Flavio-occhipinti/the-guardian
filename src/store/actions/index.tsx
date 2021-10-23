import { store } from "../store";

const dispatch = (payload: any) => store.dispatch(payload);

export const getSearch = (data: any) => {
  return dispatch({
    type: "GET_SEARCH",
    payload: data,
  });
};

type ModalOptions = {
  title?: string;
  size?: "small" | "medium" | "full";
  content: any;
  className?: string;
};

export const openModal = (data: ModalOptions) => {
  return dispatch({
    type: "OPEN_MODAL",
    payload: data,
  });
};

export const closeModal = () => {
  return dispatch({
    type: "CLOSE_MODAL",
  });
};
