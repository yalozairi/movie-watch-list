import React from "react";
import { observer } from "mobx-react";

//Store
import movieStore from "../stores/movieStore";

const MovieList = ({ type }) => {

const watchList = movieStore.movies.filter((movie) => movie.watched === false).map((movie) =>
  <li className="list-group-item">{movie.name}</li>
  );

const watchedList = movieStore.movies.filter((movie) => movie.watched === true).map((movie) =>
  <li className="list-group-item">{movie.name}</li>
  );

  return ( type === true ? (
    <>
    <div className="col-6">
      <ul className="list-group">
        <li className="list-group-item active"> <b>Movies To Watch</b> </li>
      {watchList}
      </ul>
    </div>
</>
  ) : (
    <>
    <div className="col-6">
      <ul className="list-group">
        <li className="list-group-item active"> <b>Watched Movies</b> </li>
    {watchedList}
    </ul>
    </div>
    </>
  ))
};

export default observer(MovieList);
