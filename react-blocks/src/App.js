import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Advertisement from './components/Advertisement';
import Main from './components/Main';
import Subcontent from './components/Subcontent';

function App() {
  return (
    <div className="App">
      <div className="topHalf">
        <Header />
      </div>
      <div className="bottomHalf">
        <Navigation />
        <Main>
          <div className="topHalfMain">
            <Subcontent />
            <Subcontent />
            <Subcontent />
          </div>
          <div className="bottomHalfMain">
            <Advertisement />
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;
