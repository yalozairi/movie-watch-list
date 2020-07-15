import React from "react";
import "./App.css";

//styled
import { Title, GlobalStyle, AddButtonWrapper } from "./styles";

//Components
import AddButton from "./components/buttons/AddButton";
import MovieList from "./components/MovieList";

function App() {

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
        {/* <SearchBar label="Movies To Watch with Yousif  🔍" setQuery={setQuery}/> */}
          <MovieList type={true} />
          </div> <div className="col-md-6 col-sm-12 mb-3">
            {/* <SearchBar label="Movies Watched with Anas  🔎" setQuery={setQuery}/> */}
          <MovieList type={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
