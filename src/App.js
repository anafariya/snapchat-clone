import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WebcamCapture from './WebcamCapture';
import Preview from './Preview';
function App() {
  return (
    <div className="App">
      <Router>
        <div className='app_body'>
          <Routes>
            <Route path="/" element={<WebcamCapture />} />
            <Route path="/preview" element={<Preview />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
