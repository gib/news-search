import React, { Component } from "react";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: "d45e519b794d4dfc8444c23427075fca",
      hasArticles: props.hasArticles || false,
      query: "",
      sortBy: "publishedAt",
      totalResults: 0
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSortChange(event) {
    this.setState({ sortBy: encodeURIComponent(event.target.value) });
    this.handleSubmit(event);
  }

  handleSearchChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    const { apiKey, sortBy, query } = this.state;
    let encodedQ = encodeURIComponent(query);
    const url = `https://newsapi.org/v2/everything?language=en&q=${encodedQ}&apiKey=${apiKey}&sortBy=${sortBy}`;
    event.preventDefault();
    if (query === "") {
      this.props.onArticlesUpdate([]);
    }
    this.props.onFetchingArticles();
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          // this.setState({ totalResults: result.totalResults });
          this.props.onArticlesUpdate(result.articles || []);
        },
        error => {
          this.props.onArticlesUpdate([]);
        }
      );
  }

  render() {
    let foo = "searchbar";
    if (!this.props.hasArticles) {
      foo = "searchbar welcome";
    }
    return (
      <header className={foo}>
        <h1 className="searchbar-welcome">News Search</h1>
        <form className="searchbar-form" onSubmit={this.handleSubmit}>
          <input
            className="searchbar-input"
            autoFocus={true}
            onChange={this.handleSearchChange}
            type="search"
            placeholder="Search"
            value={this.state.query}
          />
          <select className="searchbar-sort" onChange={this.handleSortChange}>
            <option value="publishedAt">Publish Date</option>
            <option value="popularity">Popularity</option>
            <option value="relevancy">Relevancy</option>
          </select>
          <input type="submit" className="searchbar-submit" value="Search" />
        </form>
        <p className="searchbar-subtitle">
          Search news from over 30,000 global sources!
        </p>
      </header>
    );
  }
}

export default Searchbar;
