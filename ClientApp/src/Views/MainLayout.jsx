import React, { useEffect, useState } from "react";
import DiscoverMovieForm from "../components/DiscoverMovieForm";
import MovieGridDisplay from "../components/MovieGridDisplay";

const MainLayout = () => {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      {movies.length > 0 ? (
        <div>
          <div className="flex justify-center align-middle my-6">
            <button
              type="button"
              onClick={() => setMovies([])}
              className="text-white bg-[#26a8c4] hover:hover:bg-[#3ea1b8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#26a8c4] dark:hover:bg-[#3ea1b8] dark:focus:ring-blue-800"
            >
              Find New Movie
            </button>
          </div>
          <MovieGridDisplay movies={movies} />
        </div>
      ) : (
        <DiscoverMovieForm setMovies={setMovies} />
      )}
    </div>
  );
};

export default MainLayout;
