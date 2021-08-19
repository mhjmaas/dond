import Article from "./Article";

/**
 * 
 * @param props contains the list of articles and a optional deleteArticle method
 * @returns The Articles component comprised of a list of Article components.
 */
export default function Articles(props) {
  return (
    <div data-w-id="2b1ed466-d04f-32ad-9de7-651ab7ec45f3" className="w-layout-grid blog-grid">
      {props.articles ? props.articles.map((article) => <Article article={article} deleteArticle={props.deleteArticle} key={article.caption} />) : null}
    </div>
  );
}

