import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { movieService } from "../api/movie";
import FormikSlider from "./FormikSlider";
import MediaGroup from "./MediaGroup";
import GenresRadioGroup from "./GenresRadioGroup";

const initialValues = {
  cast: "",
  genres: "",
  movieLengthBelow: "",
  movieLengthAbove: "",
  movieRatingBelow: "",
  movieRatingAbove: "",
  releaseYear: "",
  mediaType: "",
};

const validationSchema = Yup.object({
  cast: Yup.string(),
  genres: Yup.array(),
  movieLengthBelow: Yup.number(),
  movieLengthAbove: Yup.number(),
  movieRatingBelow: Yup.number(),
  movieRatingAbove: Yup.number(),
  releaseYear: Yup.number(),
  mediaType: Yup.string().required("Required"),
});

const DiscoverMovieForm = () => {
  const [movieData, setMovieData] = useState([]);

  const mapData = (values) => {
    const castArray = values.cast
      ? values.cast.split(",").map((actor) => actor.trim())
      : [];
    const genresArray = values.genres
      ? values.genres.split(",").map((genre) => genre.trim())
      : [];

    const data = {
      cast: castArray,
      genres: genresArray,
      movieLengthBelow:
        values.movieLengthBelow !== "" ? values.movieLengthBelow : 500,
      movieLengthAbove:
        values.movieLengthAbove !== "" ? values.movieLengthAbove : 0,
      movieRatingBelow:
        values.movieRatingBelow !== "" ? values.movieRatingBelow : 11,
      movieRatingAbove:
        values.movieRatingAbove !== "" ? values.movieRatingAbove : 0,
      releaseYear: values.releaseYear || 0,
    };
    return data;
  };

  const handleSubmit = (values) => {
    const data = mapData(values);
    console.log(data);
    movieService.useDiscoverMovies(data).then((response) => {
      console.log(response);
      if (response) {
        response.forEach((element) => {
          setMovieData((prev) => [...prev, element]);
        });
      }
    });
  };

  return (
    <div className="flex justify-center align-middle">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full  sm:m-3 " >
            <div className="flex flex-col sm:flex-row w-full  space-x-4 ">
              <div className="flex-1">
                <div className="flex flex-col justify-center align-middle">
                  <label className="flex justify-center text-white" htmlFor="cast">Cast</label>
                  <Field
                    type="text"
                    id="cast"
                    name="cast"
                    className="border-2 border-black"
                  />
                  <ErrorMessage name="cast" />
                </div>
                <div className="flex flex-col justify-center align-middle">
                  <label className="flex justify-center text-white" htmlFor="genres">Genres</label>
                  <Field
                    type="text"
                    id="genres"
                    name="genres"
                    className="border-2 border-black"
                  />
                  <ErrorMessage name="genres" />
                </div>
                <div>
                  <GenresRadioGroup name="genres" />
                </div>
              </div>
              <div className="flex-1 justify-center align-middle">
              <h3 className="flex justify-center text-white">Movie Length</h3>
              <div className="flex  justify-center align-middle">
              
                    <FormikSlider
                      nameAbove="movieLengthBelow"
                      nameBelow="movieLengthAbove" // ovo je naopako ali radi lol
                      getAriaLabel={() => "Movie Length"}
                      min={30}
                      max={300}
                    />
                  </div>
                <h3 className="flex justify-center text-white">Movie Rating</h3>
                  <div className="flex  justify-center align-middle">
                    <FormikSlider
                      nameAbove="movieRatingBelow"
                      nameBelow="movieRatingAbove" // ovo je naopako ali radi lol
                      getAriaLabel={() => "Movie Rating"}
                      min={0}
                      max={10}
                    />
                  </div>
              
              </div>
              <div className="flex-1">
                <div className="flex flex-col justify-center align-middle">
                  <label className="flex justify-center text-white" htmlFor="releaseYear">Release Year</label>
                  <Field
                    type="number"
                    id="releaseYear"
                    name="releaseYear"
                    className="border-2 border-black"
                  />
                  <ErrorMessage name="releaseYear" />
                </div>
                <div className="flex flex-col justify-center align-middle">
                  <MediaGroup name="mediaType" />
                  <ErrorMessage name="mediaType" />
                </div>
              
              </div>
            </div>
            <div className=" flex justify-center align-middle">
              {isSubmitting ? (
                <div>Submitting...</div>
              ) : (
                <button type="submit" className=" text-white bg-blue-600 p-3 rounded-full">Submit</button>
              )}
            </div>
          </Form>
        )}
      </Formik>

      {movieData.map((movie) => (
        <h2 key={movie.id}>{movie.title}</h2>
      ))}
    </div>
  );
};

export default DiscoverMovieForm;
