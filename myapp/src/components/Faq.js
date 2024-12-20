import './Faq.css';

function Faq({ children }) {
  return <div id="faq">{ children }</div>;
}

function Response({ ask, children }) {
  return (
    <div className="faqQuestion">
      {ask}
      <div className="faqResponse">{children}</div>
    </div>
  );
}


export {Faq, Response};