import React from "react";
import { observer } from "mobx-react";

//Compoenents
import WatchButton from "./buttons/WatchButton";
import DeleteButton from "./buttons/DeleteButton";

//Styles
import { DeleteSpanner, Spanner, ListTitle, ListItem } from "../styles";

const MovieList = ({ type, filteredMovies }) => {

  const watchList = filteredMovies.filter((movie) => movie.watched === false)
    .map((movie) => (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <h4>{movie.name}</h4>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn active">
            <DeleteSpanner className="badge">
              <DeleteButton movie={movie} />
            </DeleteSpanner>
          </label>
          <label class="btn active">
            <Spanner className="badge">
              <WatchButton label="Watched" movie={movie} />
            </Spanner>
          </label>
        </div>
      </li>
    ));
   
  const watchedList = filteredMovies.filter((movie) => movie.watched === true)
    .map((movie) => (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <h4>{movie.name}</h4>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn active">
            <DeleteSpanner className="badge">
              <DeleteButton movie={movie} />
            </DeleteSpanner>
          </label>
          <label class="btn active">
            <Spanner className="badge">
              <WatchButton label="Unwatch" movie={movie} />
            </Spanner>
          </label>
        </div>
      </li>
    ));

  return type === true ? (
    <>
      
        <ul className="list-group">
          <ListItem className="list-group-item active">
            <ListTitle>Movies To Watch ({watchList.length})</ListTitle>
          </ListItem>
          {watchList}
        </ul>
      
    </>
  ) : (
    <>
      
        <ul className="list-group">
          <ListItem className="list-group-item active">
            <ListTitle>Watched Movies ({watchedList.length})</ListTitle>
          </ListItem>
          {watchedList}
        </ul>
    
    </>
  );
};

export default observer(MovieList);
