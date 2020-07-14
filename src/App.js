import React from 'react';
import './App.css';

//styled
import {Title, GlobalStyle} from "./styles"

//Components
import AddButton from './components/buttons/AddButton';
import MovieList from './components/MovieList';

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
      <MovieList type={true} />
      <MovieList type={false} />
      </div>
    </div>
    </div>
  );
}

export default App;
