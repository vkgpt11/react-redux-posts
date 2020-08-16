import React, { Component } from "react";
import '../App.css';
export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  render() {
    const postItems = this.state.posts.map((post) => (
      <div className="post" key={post.id}>
        <div className="title">{post.title}</div>
        <div>{post.body}</div>
      </div>
    ));
    return (
      <div>
        {postItems}
      </div>
    );
  }
}
