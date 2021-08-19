import moment from 'moment';

/**
 * 
 * @param article the json for an article including an Id
 * @param deleteArtice a callback function used to show the delete button when provided, and used to callback the delete itself
 * @returns Article component
 */
export default function Article({ article, deleteArticle = null }) {
  // make sure to have a valid createdAt Date object.
  const createdAt = typeof article?.createdAt === 'number' ? new Date(article.createdAt) : article.createdAt?.toDate();
  return (
      <div className="blog-item-wrap">
        {
          !!deleteArticle && (
            <a href="#" className="remove-item" onClick={() => deleteArticle(article.id)}>
              <img src="/images/Plus-Template.svg" loading="lazy" alt="" className="faq-plus"/>
            </a>
          )
        }
       
        <div className="blog-image-wrap">
          <img src={article.img} loading="lazy" alt="" className="blog-thumbnail"/></div>
        <div className="blog-content">
          <div className="blog-detail-wrapper">
            <div className="category-tag">
              <div>{article.tag}</div>
            </div>
            <div className="subheading-small">{moment(createdAt).format('MMMM Do, YYYY')}</div>
          </div>
          <h5>{article.caption}</h5>
        </div>
      </div>
  )
}