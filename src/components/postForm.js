import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { CreatePosts } from "./reducers/actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.CreatePosts(post);
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Add Posts:</h1>
        <form action="" method=" ">
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.onChange}
          />
          <br />
          <label>Body: </label>
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.onChange}
          />
          <br />
          <button type="submit" onSubmit={this.onSubmit}>
            Sumbit
          </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  CreatePosts: propTypes.func.isRequired,
};

export default connect(null, { CreatePosts })(PostForm);
