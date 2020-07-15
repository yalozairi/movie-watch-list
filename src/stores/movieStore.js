import { decorate, observable } from "mobx";

//Data
import movies from "../movies";

class MovieStore {
  movies = movies;
  idCounter = movies.length + 1;

  deleteMovie = (movie) => {
    this.movies = this.movies.filter((_movie) => _movie.id !== movie.id);
  };

  moveMovie = (movie) => {
    const foundMovie = this.movies.find((_movie) => _movie.id === movie.id);
    foundMovie.watched = !foundMovie.watched;
  };

  addMovie = (newMovie) => {
    const newNewMovie = {
      name: newMovie,
      id: this.idCounter,
      watched: false,
    };
    this.movies.push(newNewMovie);
    this.idCounter++;
  };
}

decorate(MovieStore, { movies: observable });

const movieStore = new MovieStore();
export default movieStore;
