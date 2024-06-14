import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { movieService } from "../api/movie";


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
  cast: Yup.string().required("Required"),
  genres: Yup.string().required("Required"),
  movieLengthBelow: Yup.number().required("Required"),
  movieLengthAbove: Yup.number().required("Required"),
  movieRatingBelow: Yup.number().required("Required"),
  movieRatingAbove: Yup.number().required("Required"),
  releaseYear: Yup.number().required("Required"),
  mediaType: Yup.string().required("Required"),
});

const DiscoverMovieForm = () => {
  const [movieData, setMovieData] = useState([]);

  const mapData = (values) => {
    const castArray = values.cast.split(",").map((actor) => actor.trim());
    const genresArray = values.genres.split(",").map((genre) => genre.trim());

    const data = {
      cast: castArray,
      genres: genresArray,
      movieLengthBelow: values.movieLengthBelow,
      movieLengthAbove: values.movieLengthAbove,
      movieRatingBelow: values.movieRatingBelow,
      movieRatingAbove: values.movieRatingAbove,
      releaseYear: values.releaseYear,
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
            <Form className="flex flex-col justify-center align-middle">
              <div className="flex flex-col justify-center align-middle">
                <label htmlFor="cast">Cast</label>
                <Field
                  type="text"
                  id="cast"
                  name="cast"
                  className="border-2 border-black"
                />
                <ErrorMessage name="cast" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <label htmlFor="genres">Genres</label>
                <Field
                  type="text"
                  id="genres"
                  name="genres"
                  className="border-2 border-black"
                />
                <ErrorMessage name="genres" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <label htmlFor="movieLengthBelow">Movie Length Below</label>
                <Field
                  type="number"
                  id="movieLengthBelow"
                  name="movieLengthBelow"
                  className="border-2 border-black"
                />
                <ErrorMessage name="movieLengthBelow" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <label htmlFor="movieLengthAbove">Movie Length Above</label>
                <Field
                  type="number"
                  id="movieLengthAbove"
                  name="movieLengthAbove"
                  className="border-2 border-black"
                />
                <ErrorMessage name="movieLengthAbove" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <label htmlFor="movieRatingBelow">Movie Rating Below</label>
                <Field
                  type="number"
                  id="movieRatingBelow"
                  name="movieRatingBelow"
                  className="border-2 border-black"
                />
                <ErrorMessage name="movieRatingBelow" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <label htmlFor="movieRatingAbove">Movie Rating Above</label>
                <Field
                  type="number"
                  id="movieRatingAbove"
                  name="movieRatingAbove"
                  className="border-2 border-black"
                />
                <ErrorMessage name="movieRatingAbove" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <label htmlFor="releaseYear">Release Year</label>
                <Field
                  type="number"
                  id="releaseYear"
                  name="releaseYear"
                  className="border-2 border-black"
                />
                <ErrorMessage name="releaseYear" />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <label htmlFor="mediaType">Media Type</label>
                <Field
                  type="text"
                  id="mediaType"
                  name="mediaType"
                  className="border-2 border-black"
                />
                <ErrorMessage name="mediaType" />
              </div>
              {isSubmitting ? <div>Submitting...</div> : <button type="submit">Submit</button>}
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
