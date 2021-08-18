import Article from "./Article";

export default function Articles(props) {
  return (
    <div data-w-id="2b1ed466-d04f-32ad-9de7-651ab7ec45f3" className="w-layout-grid blog-grid">
      {props.articles ? props.articles.map((article) => <Article article={article} key={article.createdAt} />) : null}
    </div>
  );
}

