import './Content.css';

function Content({ model, children}) {
  return <div id={model === 1 ? `contents` : `contentsModel2`}>{children}</div>;
}

function ContentText({ title, subtitle, children, button, model}) {
  return (
    <div className={`${model === 2 ? "ContentModel2" : "ContentText"}`}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <h4>{children}</h4>
      <label>{button}</label>
    </div>
  );
}

function ContentImage({ model, image }) {
  return (
    <div className={`${model === 2 ? "contentModel2Image" : "contentImage"}`}>
      <img alt="" src={image} />
    </div>
  );
}

export { Content, ContentText, ContentImage };
