import moment from 'moment';

/**
 * 
 * @param message the json for an message including an Id
 * @param deleteArtice a callback function used to show the delete button when provided, and used to callback the delete itself
 * @returns Article component
 */
export default function Message({ message, deleteMessage = null }) {
  // make sure to have a valid createdAt Date object.
  const createdAt = typeof message?.createdAt === 'number' ? new Date(message.createdAt) : message.createdAt?.toDate();
  return (
        <div className="contact-banner">
            <div className="contact-message">
                <h5 className="message-name">{message.name}</h5>
                <p className="message-date">{moment(createdAt).format('MMMM Do, YYYY')}</p>
                <p className="message-message">{message.message}</p>
                <p className="message-email">
                    <a className="link" href={`mailto:${message.email}`}>{message.email}</a>
                </p>
                {
                    !!deleteMessage && (
                        <a href="#" className="link-span delete-message" onClick={() => deleteMessage(message.id)}>
                            Delete this message.
                        </a>
                    )
                }
            </div>
        </div>
  )
}
