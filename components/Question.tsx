export default function Question({ question, deleteQuestion = null  }) {
    return (
        <div className="faq-question-wrap w-inline-block">
            <div className="faq-question-bar">
                <div className="faq-title">{question.question}</div>
                <img src="/images/Plus-Template.svg" loading="lazy" alt="" className="faq-plus"/>
            </div>
            <div className="faq-content">
                <p className="faq-paragraph">{question.answer}</p>
                {
                !!deleteQuestion && (
                    <a href="#" className="link-span delete-question" onClick={() => deleteQuestion(question.id)}>
                        Delete this question.
                    </a>
                )
            }
            </div>
        </div>
    )
}