import Articles from "./Articles.jsx";
import React, { Component } from "react";
import Searchbar from "./Searchbar.jsx";

class NewsSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], query: "" };
    this.handleArticlesUpdate = this.handleArticlesUpdate.bind(this);
    this.handleFetchingArticles = this.handleFetchingArticles.bind(this);
    this.handleHeadlineSelect = this.handleHeadlineSelect.bind(this);
  }

  handleFetchingArticles() {
    this.setState({ fetchingArticles: true });
  }

  handleArticlesUpdate(articles) {
    this.setState({ articles: articles, fetchingArticles: false });
  }

  handleHeadlineSelect(headline) {
    this.setState({ query: headline });
  }

  render() {
    let hasArticles = this.state.articles.length > 0;
    return (
      <div className="sortable-news-search">
        <Searchbar
          hasArticles={hasArticles}
          onFetchingArticles={this.handleFetchingArticles}
          onArticlesUpdate={this.handleArticlesUpdate}
        />
        <Articles
          articles={this.state.articles}
          fetchingArticles={this.state.fetchingArticles}
        />
      </div>
    );
  }
}

export default NewsSearch;
