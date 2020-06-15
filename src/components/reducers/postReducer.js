import { FetchPost, NewPost } from "./actions/type";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FetchPost:
      return {
        ...state,
        items: action.playload,
      };
    case NewPost:
      return {
        ...state,
        item: action.playload,
      };
    default:
      return state;
  }
}
