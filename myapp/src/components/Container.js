import "./Container.css";

function Container({ children, padding, background, backgroundColor, effect}) {
  return (
    <div className={`container ${padding || ""}`}>
      <div
        className={`container-background ${effect === 1 ? 'blur' : ''}`}
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
