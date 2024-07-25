import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { movieService } from "../api/movie";
import FormikSlider from "./FormikSlider";
import MediaGroup from "./MediaGroup";
import GenresRadioGroup from "./GenresRadioGroup";
import CircularProgress from '@mui/material/CircularProgress';
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

const DiscoverMovieForm = ({ setMovies }) => {
 
  const mapData = (values) => {
    const castArray = values.cast
      ? values.cast.split(",").map((actor) => actor.trim())
      : [];
    

    const data = {
      cast: castArray,
      genres: values.genres,
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
        setMovies(response);
      }
    });
  };

  return (
    <div >
      <div className="flex justify-center align-middle">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full  sm:m-3 ">
              <div className="flex flex-col sm:flex-row w-full  space-x-4 ">
                <div className="flex-1">
                  <div className="flex flex-col justify-center align-middle ml-2">
                    <label
                      className="flex justify-center text-white"
                      htmlFor="cast"
                    >
                      Cast
                    </label>
                    <Field
                      type="text"
                      id="cast"
                      name="cast"
                      className="block w-full p-2 text-gray-900   rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="cast" />
                  </div>
                  <h3 className="flex justify-center my-3 text-white">Genres</h3>
                  <div>
                    <GenresRadioGroup name="genres" />
                  </div>
                </div>
                <div className="flex-1 ">
        
                    <h3 className="flex justify-center text-white">Movie Length</h3>
                    <div className="flex justify-center align-middle">
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
                  <div className="flex flex-col justify-center align-middle mr-3">
                    <label
                      className="flex justify-center text-white"
                      htmlFor="releaseYear"
                    >
                      Release Year
                    </label>
                    <Field
                      type="number"
                      id="releaseYear"
                      name="releaseYear"
                      className="block w-full p-2 text-gray-900  rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage name="releaseYear" />
                  </div>
                  <div className="flex flex-col my-3 justify-center align-middle">
                    <MediaGroup name="mediaType" />
                    <ErrorMessage name="mediaType" />
                  </div>
                </div>
              </div>
              <div className=" flex justify-center align-middle">
                {isSubmitting ? (
                  <div><CircularProgress /></div>
                ) : (
                  <button
                    type="submit"
                    className=" text-white bg-[#26a8c4] hover:bg-[#3ea1b8] px-10 py-2 rounded-full"
                  >
                    Submit
                  </button>
                )}
              </div>
            </Form>
        
          )}
        </Formik>
      </div>
     
      
    </div>
   
  );
};

export default DiscoverMovieForm;
