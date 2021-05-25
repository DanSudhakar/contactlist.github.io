import * as aType from "../actions/actionTypes";

const initialState = {
  numOfLaptops: 110,
};
const laptopReducer = (state = initialState, action) => {
  switch (action.type) {
    case aType.BUY_LAPTOP:
      return {
        numOfLaptops: state.numOfLaptops + 1,
      };
    default:
      return state;
  }
};
export default laptopReducer;
