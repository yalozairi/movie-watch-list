import React from "react";
import { observer } from "mobx-react";

//Store
import movieStore from "../../stores/movieStore";

//Styles
import { WatchButtonStyled } from "../../styles";

const WatchButton = ({ movie, label }) => {
  return (
    <WatchButtonStyled>
      <h6 onClick={() => movieStore.moveMovie(movie.id)}>{label}</h6>
    </WatchButtonStyled>
  );
};

export default observer(WatchButton);
