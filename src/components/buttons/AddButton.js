import React from 'react';
import { AddButtonStyle } from '../../styles';

import movieStore from "../../stores/movieStore"

const AddButton = () => {
    return (
    
        <div className="input-group mb-3 col-8">
  <input type="text" className="form-control" placeholder="Add a movie to your watchlist!" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button" onClick={movieStore.addMovie} >Add <AddButtonStyle /> </button>
  </div>
</div>

    );
};

export default AddButton;