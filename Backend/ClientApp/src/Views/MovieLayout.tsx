import React, { useEffect } from "react";
import { movieService } from "../api/movie";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Divider } from "@mui/material";
import Button from "@mui/joy/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/joy/Typography";
import UserReview from "../components/UserReview";
const genres_ids = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];
const MovieLayout = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  useEffect(() => {
    try {
      movieService.useGetMovieDetails({ id }).then((data) => {
        setMovie(data);
        console.log(data);
      });
      movieService.useGetMovieCredits({ id }).then((data) => {
        setCredits(data);
        console.log(data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [id]);

  return (
    <div>
      {movie && credits && (
        <div>
          <div className=" flex flex-col sm:flex-row">
            <div className=" flex w-1/3 mt-10 ml-32">
              <img
                className="  w-64 h-auto"
                src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                alt=""
              />
            </div>
            <div className=" flex w-full sm:w-2/3 mr-32 mt-10 align-middle justify-center">
              <div className=" flex flex-col  justify-center align-middle mx-4">
                <h1 className=" flex flex-row  text-4xl text-white">
                  {movie.title} ({movie.releaseDate.substring(0, 4)})
                </h1>
                <Typography level="body-sm" textColor={"gray"}>
                  {movie.genres
                    .map((genre) => {
                      const genreName = genres_ids.find(
                        (g) => g.id === genre.id
                      );
                      return genreName.name;
                    })
                    .join(", ")}
                </Typography>
                <p className=" mt-4 text-white">{movie.overview}</p>
                <p className=" mt-4 text-white">
                  Runtime:{" "}
                  <strong className=" text-gray-300">{movie.runtime}</strong>{" "}
                  min
                </p>
                <div className=" flex flex-row mt-4">
                  <Divider orientation="vertical" flexItem />
                  <Typography level="body-xs" fontWeight="md" textColor="white">
                    <Rating
                      name="half-rating-read"
                      value={movie.voteAverage / 2}
                      precision={0.25}
                      readOnly
                    />
                  </Typography>
                  <div className=" mt-1 ">
                    <Typography fontSize="sm" fontWeight="md" textColor="white">
                      {movie.voteAverage}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col mt-10 m-32">
            <h1 className=" text-2xl text-white mb-2">Cast</h1>
            <div className=" grid   sm:grid-cols-5   gap-10">
              {credits.cast.slice(0, 5).map((actor) => (
                <div
                  key={actor.id}
                  className=" flex flex-col ml-4 w-full h-auto"
                >
                  <img
                    className=" w-52 h-auto rounded-full"
                    src={`https://image.tmdb.org/t/p/w500${actor.profilePath}`}
                    alt=""
                  />
                  <p className=" text-white mt-2">{actor.name}</p>
                  <p className=" text-gray-300">{actor.character}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <hr style={{ color: "white" }} />
            <div className=" flex items-center justify-center">
              <button className="mt-4 p-3 w-48 bg-[#26a8c4] hover:bg-[#26a7c4e3] text-white rounded-lg">
               Add review
              </button>
            </div>
            <UserReview />
            <UserReview />
            <UserReview />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieLayout;
