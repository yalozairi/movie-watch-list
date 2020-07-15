import React from "react";

//Styles
import { DeleteButtonStyled } from "../../styles";

//Store
import movieStore from "../../stores/movieStore";

const DeleteButton = ({ movie }) => {
  return (
    <DeleteButtonStyled>
      <h6 onClick={movieStore.deleteMovie(movie)}>Delete</h6>
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
