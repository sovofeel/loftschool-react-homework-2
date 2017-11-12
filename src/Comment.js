import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
  handleDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id);
  };

  render() {
    const { text } = this.props;

    return (
      <div>
        <p>{text}</p>
        <span onClick={this.handleDelete} className="delete">
          Удалить
        </span>
      </div>
    );
  }
}

export default Comment;
