import React from 'react';
import './App.css';

//styled
import {Title, GlobalStyle} from "./styles"
import WatchList from './components/WatchList';
import WatchedList from './components/WatchedList';
import AddButton from './components/buttons/AddButton';

function App() {
  return (
    <div className="App">
    <GlobalStyle/>
      <Title>Movie Watch List</Title>
      <div className="container">
      <div className="row">
<AddButton />
</div>
    </div>

      <div className="container">
      <div className="row">
      <WatchList />
      <WatchedList />
      </div>
    </div>
    </div>
  );
}

export default App;
