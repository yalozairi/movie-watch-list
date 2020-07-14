import React from "react";
import { observer } from "mobx-react";

//Store
import movieStore from "../stores/movieStore";

const MovieList = ({ type }) => {
  return ( type === true ? (
    <div className="col-6">
      <ul className="list-group">
        <li className="list-group-item active">
          <b>Watched Movies</b>
        </li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  ) : (
    <div className="col-6">
      <ul className="list-group">
        <li className="list-group-item active">
          <b>Movies To Watch</b>
        </li>
        <li className="list-group-item">{movieStore.newMovie}</li>
      </ul>
    </div>
  ))
};

export default observer(MovieList);
