import React, {useState} from "react";
import "./App.css";

//styled
import { Title, GlobalStyle, AddButtonWrapper, WarningMessage } from "./styles";

//Components
import AddButton from "./components/buttons/AddButton";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

//Stores
import movieStore from "./stores/movieStore";

function App() {
  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");

  const [movies] = useState(movieStore.movies)

  const filteredMovies1 = movieStore.movies.filter((movie) => movie.name.toUpperCase().includes(query1.toUpperCase())).filter((movie) => movie.watched === false);

  const filteredMovies2 = movieStore.movies.filter((movie) => movie.name.toUpperCase().includes(query2.toUpperCase())).filter((movie) => movie.watched === true);;

  return (
    <div className="App">
      <GlobalStyle />
      <Title>Movie Watch List</Title>
      <div className="container">
        <div className="row">
          <AddButtonWrapper>
            <AddButton />
          </AddButtonWrapper>
        </div>
      </div>

      <div className="container">
        <div className="row mt-3">
        <div className="col-md-6 col-sm-12 mb-3">
        <SearchBar type={true} label="Movies To Watch with Yousif  🔍" setQuery1={setQuery1}/>
          <MovieList type={true} filteredMovies1={filteredMovies1} filteredMovies2={filteredMovies2} movies={movieStore.movies}/>
  {filteredMovies1.length <= 0 ? <WarningMessage>No Movies Found.... Yousif Says Hi ;)</WarningMessage>:null }
          </div> 
          
          <div className="col-md-6 col-sm-12 mb-3">
            <SearchBar type={false} label="Movies Watched with Anas  🔎" setQuery2={setQuery2}/>
          <MovieList type={false} filteredMovies1={filteredMovies1} filteredMovies2={filteredMovies2} movies={movies}/>
          {filteredMovies2.length <= 0 ? <WarningMessage>No Movies Found.... Anas Says Hi ;)</WarningMessage>:null }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
