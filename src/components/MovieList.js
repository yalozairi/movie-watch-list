import React, { useState } from "react";
import { observer } from "mobx-react";

//Compoenents
import WatchButton from "./buttons/WatchButton";
import DeleteButton from "./buttons/DeleteButton";
import SearchBar from "./SearchBar";

//Store
import movieStore from "../stores/movieStore";

//Styles
import {
  DeleteSpanner,
  Spanner,
  ListTitle,
  ListItem,
  WarningMessage,
  Label,
} from "../styles";

const MovieList = ({ type }) => {
  const [query, setQuery] = useState("");

  const watchList = movieStore.movies
    .filter((movie) => movie.name.toUpperCase().includes(query.toUpperCase()))
    .map((movie) => movie)
    .filter((movie) => movie.watched === false)
    .map((movie) => (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <h4>{movie.name}</h4>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <Label className="btn active">
            <DeleteSpanner className="badge">
              <DeleteButton movie={movie} />
            </DeleteSpanner>
          </Label>
          <label className="btn active">
            <Spanner className="badge">
              <WatchButton label="Watched" movie={movie} />
            </Spanner>
          </label>
        </div>
      </li>
    ));

  const watchedList = movieStore.movies
    .filter((movie) => movie.name.toUpperCase().includes(query.toUpperCase()))
    .map((movie) => movie)
    .filter((movie) => movie.watched === true)
    .map((movie) => (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <h4>{movie.name}</h4>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <Label className="btn active">
            <DeleteSpanner className="badge">
              <DeleteButton movie={movie} />
            </DeleteSpanner>
          </Label>
          <label className="btn active">
            <Spanner className="badge">
              <WatchButton label="Unwatch" movie={movie} />
            </Spanner>
          </label>
        </div>
      </li>
    ));

  return type === true ? (
    <>
      <SearchBar label="Movies To Watch with Yousif  🔍" setQuery={setQuery} />
      <ul className="list-group">
        <ListItem className="list-group-item active">
          <ListTitle>Movies To Watch ({watchList.length})</ListTitle>
        </ListItem>
        {watchList}
      </ul>
      {watchList.length <= 0 ? (
        <WarningMessage>No Movies Found.... Yousif Says Hi ;)</WarningMessage>
      ) : null}
    </>
  ) : (
    <>
      <SearchBar label="Movies Watched with Anas  🔎" setQuery={setQuery} />
      <ul className="list-group">
        <ListItem className="list-group-item active">
          <ListTitle>Watched Movies ({watchedList.length})</ListTitle>
        </ListItem>
        {watchedList}
      </ul>
      {watchedList.length <= 0 ? (
        <WarningMessage>No Movies Found.... Anas Says Hi ;)</WarningMessage>
      ) : null}
    </>
  );
};

export default observer(MovieList);
