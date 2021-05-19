import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <header className="">
        <img src={logo} className="App-logo" alt="logo"  style={{height:'50px', width:'50px'}}/>
      </header>
      <Posts />
    </div>
  );
}

export default App;
