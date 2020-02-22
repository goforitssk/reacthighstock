import React from 'react';
import logo from './logo.svg';
import './App.css';
// import LineChart from './Mystock'
import ReactCsv from './reactcsv'
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        
      </div>
      <ReactCsv />
      {/* <LineChart /> */}
    </div>
  );
}

export default App;
