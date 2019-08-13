import axios from "axios";

export const fetchHomePageData = url => dispatch => {
  axios
    .get("/homePage.json")
    .then(response => {
      console.log(response);
      dispatch({
        type: "NAVIGATE_TO",
        payload: response.data
      });
    })
    .catch(e => {
      console.log(`😱 Axios request failed: ${e}`);
    });
};
