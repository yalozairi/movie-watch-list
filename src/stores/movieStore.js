import { decorate, observable } from "mobx";


class MovieStore {
// movies = movies;

addMovie = (event) => {
   let newMovie = event.target.value
   return newMovie
  };
};

decorate(MovieStore, {newMovie: observable,});

const movieStore = new MovieStore();
export default movieStore;