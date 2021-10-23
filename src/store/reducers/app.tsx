const initState = {
  modal: {
    active: false,
  },
};

const app = (state: any = initState, action: any) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        modal: {
          ...action.payload,
          active: true,
        },
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modal: {
          ...state.modal,
          active: false,
        },
      };
    default:
      return state;
  }
};

export default app;
