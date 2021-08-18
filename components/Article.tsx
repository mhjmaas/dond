import moment from 'moment';

export default function Article({ article }) {
  const createdAt = typeof article?.createdAt === 'number' ? new Date(article.createdAt) : article.createdAt.toDate();
  return (
      <div className="blog-item-wrap">
      <div className="blog-image-wrap"><img src={article.img} loading="lazy" alt="" className="blog-thumbnail"/></div>
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