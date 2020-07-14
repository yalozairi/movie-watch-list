import { decorate, observable } from "mobx";

//Data
import movies from "../movies"

class MovieStore {
movies = movies;

addMovie = (newMovie) => {
  const newNewMovie = {
    name: newMovie,
    id:this.movies[this.movies.length - 1].id + 1,
    watched: false,
  }
   this.movies.push(newNewMovie)
  };

};

decorate(MovieStore, {movies: observable,});

const movieStore = new MovieStore();
export default movieStore;