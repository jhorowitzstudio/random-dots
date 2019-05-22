import React from 'react';
import './styles/App.css';
import Interface from './components/Interface';
import CanvasContainer from './components/CanvasContainer';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Brick Generator</h1>
      </header>
      <Interface />
      <CanvasContainer />
    </div>
  );
}

export default App;
