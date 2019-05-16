import React, { Component } from "react";
import MovieCard from "./MovieCard";

class Dashboard extends Component {
  render() {
    var { users, movies, profiles } = this.props;

    const moviecards = Object.keys(movies).map(movie => (
      // const movieID = ;
      // const movieName = ;
      <MovieCard
        users={users}
        movies={movies}
        profiles={profiles}
        movieID={movies[movie].id}
        movieName={movies[movie].name}
      />
    ));

    return <ul>{moviecards}</ul>;
  }
}

export default Dashboard;
