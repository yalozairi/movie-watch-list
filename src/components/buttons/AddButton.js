import React, { useState } from "react";
import { observer } from "mobx-react";

//Styles
import { AddButtonIcon, AddButtonStyled } from "../../styles";

//Stores
import movieStore from "../../stores/movieStore";

const AddButton = () => {
  const [input, setInput] = useState("");

  return (
    <div className="input-group mb-3 col-12">
      <input
        type="text"
        className="form-control"
        placeholder="Add a movie to your watchlist!"
        aria-label="Add a movie to your watchlist!"
        aria-describedby="basic-addon2"
        onChange={(event) => setInput(event.target.value)}
        style={{border: "1.5px solid grey"}}
      />
      <div className="input-group-append">
        <AddButtonStyled
          className="btn btn-info border border-secondary"
          type="button"
          onClick={() => (input === "" ? null : movieStore.addMovie(input))}
        >
          Add <AddButtonIcon style={{color: "red"}} />
        </AddButtonStyled>
      </div>
    </div>
  );
};

export default observer(AddButton);
