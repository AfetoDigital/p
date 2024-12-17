import "./AppMain.css";

function AppMain({children}) {
  return (
    <main>
      <div id="main">{children}</div>
    </main>
  );
}

export default AppMain;
