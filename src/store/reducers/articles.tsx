const initState = {
  search: {},
};

const articles = (state: any = initState, action: any) => {
  switch (action.type) {
    case "GET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default articles;
