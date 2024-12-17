import logo from './logo.svg';
import './App.css';
import AppHeader from './layout/AppHeader.js';
import AppMain from './layout/AppMain.js';
import AppFooter from './layout/AppFooter.js';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <AppFooter></AppFooter>      
    </div>
  );
}

export default App;
