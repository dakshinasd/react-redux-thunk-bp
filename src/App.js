import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "./store/actions/post.actions";
import Loader from "./Loader";

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const postList =
      this.props.posts &&
      this.props.posts.map(post => {
        return (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.content}</div>
            <hr />
          </div>
        );
      });
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        {this.props.isLoading ? <Loader /> : postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      dispatch(fetchPosts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
