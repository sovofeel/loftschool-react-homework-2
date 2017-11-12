import React, { Component } from "react";
import Comment from "./Comment";
import "./NewsPost.css";

let id = 0;

function getTodoId() {
  id += 1;
  return id;
}

class NewsPost extends Component {
  state = {
    comments: [],
    commentInput: ""
  };

  handleChange = event => {
    this.setState({ commentInput: event.target.value });
  };

  handleKeyDown = event => {
    const { commentInput, comments } = this.state;
    if (event.keyCode === 13 && commentInput) {
      const newNews = { text: commentInput, id: getTodoId() };
      this.setState({
        comments: [...comments, newNews],
        commentInput: ""
      });
    }
  };

  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter(comment => id !== comment.id)
    }));
  };

  render() {
    const { text } = this.props;
    return (
      <div className="news-post">
        <p>{text}</p>
        <input
          type="text"
          className="comment-input"
          name="commentInput"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.commentInput}
        />
        {this.state.comments.map(comment => (
          <Comment
            onDelete={this.handleDelete}
            text={comment.text}
            id={comment.id}
            key={comment.id}
          />
        ))}
      </div>
    );
  }
}

export default NewsPost;
