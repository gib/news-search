import Article from "./Article.jsx";
import React, { Component } from "react";

class Articles extends Component {
  render() {
    const articles = this.props.articles || [];
    const renderedArticles = articles.map((article, index) => {
      return <Article article={article} key={index} />;
    });
    if (articles.length > 0) {
      return <div className="articles">{renderedArticles}</div>;
    }
    return null;
  }
}

export default Articles;
