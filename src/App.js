import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./components/post";
import PostForm from "./components/postForm";
import store from "./components/store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
