import React, { Component } from "react";
import MovieCard from "./MovieCard";

function Dashboard(props) {
  var { users, movies, profiles } = props;

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

export default Dashboard;
