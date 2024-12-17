import "./Container.css";

function Container({ children, padding, background, backgroundColor }) {
  return (
    <div className={`container ${padding || ""}`}>
      <div
        className="container-background"
        style={{
          backgroundImage: background
            ? `url(${background})`
            : backgroundColor?.includes("linear-gradient")
            ? backgroundColor
            : "none",
          backgroundColor: backgroundColor?.includes("linear-gradient")
            ? "transparent"
            : backgroundColor || "transparent",
        }}
      ></div>
      {children}
    </div>
  );
}

export default Container;
