import React from 'react';
import {observer} from "mobx-react"

// Stores
import movieStore from "../stores/movieStore"

const watchList = () => {
    return (
        <div className="col-6">
            <ul className="list-group">
  <li className="list-group-item active"><b>Movies To Watch</b></li>
  <li className="list-group-item">{movieStore.newMovie}</li>
 
</ul>
        </div>
    );
};

export default observer(watchList);