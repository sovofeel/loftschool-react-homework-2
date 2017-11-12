import React, { Component } from "react";
import NewsPost from "./NewsPost";
import "./App.css";

class App extends Component {
  state = {
    news: [],
    newsInput: ""
  };

  handleChange = event => {
    this.setState({ newsInput: event.target.value });
  };

  handleKeyDown = event => {
    const { newsInput, news } = this.state;
    if (event.keyCode === 13 && newsInput) {
      const newNews = { text: newsInput };

      this.setState({
        news: [...news, newNews],
        newsInput: ""
      });
    }
  };

  render() {
    return (
      <div className="App">
        <input
          className="todo-input"
          type="text"
          name="newsInput"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.newsInput}
        />
        <div className="todo-container" />
        {this.state.news.map((news, index) => (
          <NewsPost key={index} text={news.text} />
        ))}
      </div>
    );
  }
}

export default App;
