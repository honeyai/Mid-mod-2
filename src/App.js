import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import ContentPage from './Components/ContentPage';

function App() {
  return (
    <div className="App">
      {/* <Landing/> */}
      <ContentPage
        activeUser="sunrisechef"
      />
    </div>
  );
}

export default App;
