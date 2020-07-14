import React, {useState} from 'react';
import { AddButtonStyle } from '../../styles';

import movieStore from "../../stores/movieStore"
import { observer } from 'mobx-react';

const AddButton = () => {
  const [input, setInput] = useState("")

    return (
    
        <div className="input-group mb-3 col-8">
  <input type="text" className="form-control" placeholder="Add a movie to your watchlist!" aria-label="Add a movie to your watchlist!" aria-describedby="basic-addon2" onChange={(event) => setInput(event.target.value)}/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button" onClick={() => (
     input === "" ? null : movieStore.addMovie(input)
    )} >Add <AddButtonStyle /> </button>
  </div>
</div>

    );
};

export default observer(AddButton);