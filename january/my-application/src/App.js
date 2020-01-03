import React from 'react';
import './App.css';
import video from './videos/sculpture.mp4';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Art Videos</h1>
      </header>
      <div>
        <video controls poster="https://www.metmuseum.org/toah/images/hb/hb_2001.78.jpg" height={200}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag or format.
        </video>
      </div>
    </div>
  );
}

export default App;
