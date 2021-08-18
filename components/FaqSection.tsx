import Question from "./Question";

export default function FaqSection(props) {
  return (
    <div className="faq-section">
        <div className="container-small">
          <div data-w-id="6e55dcaa-8b2c-3c8b-c222-4f0ac739d070" className="title-wrap-centre">
            <h2>Frequently Asked<br/><span className="brand-span">Questions</span></h2>
            <div className="accent-line-small"></div>
          </div>
          <div data-w-id="6e55dcaa-8b2c-3c8b-c222-4f0ac739d077" className="faq-wrapper">
            <div className="w-layout-grid faq-grid">
              { props.questions ? props.questions?.map((question) => <Question question={question} key={question.order}></Question>) : null }
            </div>
          </div>
        </div>
      </div>
  );
}