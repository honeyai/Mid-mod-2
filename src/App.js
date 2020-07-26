import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import Header from './Components/Header';
import ContentPage from './Components/ContentPage';

function App() {
  return (
    <div className="App">
      {/* <ContentPage
        activeUser="sunrisechef"
      /> */}
      <Landing/>
    </div>
  );
}

export default App;
