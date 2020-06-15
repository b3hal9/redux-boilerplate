import { FetchPost, NewPost } from "./type";

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: FetchPost,
        payload: data,
      })
    )
    .catch((err) => console.log(err));
};
export const CreatePosts = (Post) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: NewPost,
        payload: data,
      })
    )
    .catch((err) => console.log(err));
};
