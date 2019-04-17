import React, { Component } from "react";

class Article extends Component {
  createMarkup(html) {
    return { __html: html };
  }

  render() {
    const article = this.props.article;
    const articleUrl = new URL(article.url);
    const hostname = articleUrl.hostname.replace("www.", "");
    const sourceLogoUrl = `//logo.clearbit.com/${hostname}?size=60`;
    const publishedAt = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(article.publishedAt));
    const articleImage = article.urlToImage || "newspaper.svg";
    return (
      <article className="article">
        <figure>
          <img className="article-image" alt="" src={articleImage} />
        </figure>
        <div className="article-content">
          <div className="article-header">
            <div className="article-hgroup">
              <h2 className="article-title">{article.title}</h2>
              <h4 className="article-published">
                <img className="article-source" alt="" src={sourceLogoUrl} />
                {publishedAt}
              </h4>
            </div>
          </div>
          <p
            className="article-summary"
            dangerouslySetInnerHTML={this.createMarkup(article.description)}
          />
          <a className="article-readmore" target="new" href={article.url}>
            Read More
          </a>
        </div>
      </article>
    );
  }
}

export default Article;
