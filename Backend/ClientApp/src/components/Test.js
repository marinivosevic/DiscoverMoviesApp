import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { movieService } from "../api/movie";


const initialValues = {
  cast: "",
  genres: "",
  movieLengthBelow: 500,
  movieLengthAbove: 0,
  movieRatingBelow: 11,
  movieRatingAbove: 0,
  releaseYear: "",
  mediaType: "",
};

const validationSchema = Yup.object({
  cast: Yup.string(),
  genres: Yup.string(),
  movieLengthBelow: Yup.number(),
  movieLengthAbove: Yup.number(),
  movieRatingBelow: Yup.number(),
  movieRatingAbove: Yup.number(),
  releaseYear: Yup.number(),
  mediaType: Yup.string().required("Required"),
});

const ProtectedRoutes = () => {
  const [movieData, setMovieData] = useState([]);

  const mapData = (values) => {
    console.log(values);
    const castArray = values.cast ? values.cast.split(",").map((actor) => actor.trim()) : [];
    const genresArray = values.genres ? values.genres.split(",").map((genre) => genre.trim()) : [];
    
    const data = {
      cast: castArray,
      genres: genresArray,
      movieLengthBelow: values.movieLengthBelow !== null ? values.movieLengthBelow : 500,
      movieLengthAbove: values.movieLengthAbove !== null ? values.movieLengthAbove : 0,
      movieRatingBelow: values.movieRatingBelow !== null ? values.movieRatingBelow : 11,
      movieRatingAbove: values.movieRatingAbove !== null ? values.movieRatingAbove : 0,
      releaseYear: values.releaseYear || '',
    };
    return data;
  };

  const handleSubmit = (values) => {
    
    const data = mapData(values);
    
    movieService.useDiscoverMovies(data).then((response) => {
      //console.log(response);
      if (response) {
        response.forEach((element) => {
          setMovieData((prev) => [...prev, element]);
        });
      }
    });
  };

  return (
  
    
      <div className="flex justify-center align-middle bg-zinc-950">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col justify-center align-middle">
              <div className="flex flex-col justify-center align-middle">
                <label htmlFor="cast">anobasoubd</label>
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
              {isSubmitting ? <div>fndsaoifn...</div> : <button type="submit">Submit</button>}
            </Form>
          )}
        </Formik>

        {movieData.map((movie) => (
          <h2 key={movie.id}>{movie.title}</h2>
        ))}
      </div>
    
  );
};

export default ProtectedRoutes;
