const initialState = {
  game: {},
  screen: [],
  isLoading: false,
};
const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: action.payload.isLoading,
        // isLoaded: false,
      };
    // case "GET_LOADING":
    //   return{
    //     isLoaded: true,
    //   }
    default:
      return { ...state };
  }
};

export default detailReducer;
