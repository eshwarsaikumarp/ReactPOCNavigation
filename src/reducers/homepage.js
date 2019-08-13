const initialState = {
  navigateto: {}
};

const homepage = (state = initialState, action) => {
  switch (action.type) {
    case "NAVIGATE_TO":
      return { ...state, navigateto: action.payload };
    default:
      return { ...state };
  }
};

export default homepage;
