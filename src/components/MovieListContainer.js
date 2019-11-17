import React from "react";
import MovieListItem from "./MovieListItem";

const MovieListContainer = props => {
  const { results } = props.listData;

  if (!results) {
    return <div>No results</div>;
  }
  const movieItems = results.map(movie => {
    return <MovieListItem key={movie.id} movie={movie} />;
  });

  return (
    <div>
      <ul>{movieItems}</ul>
    </div>
  );
};

export default MovieListContainer;
