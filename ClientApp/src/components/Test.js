import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MovieService } from "../api/movie";
import { values } from "@fluentui/react";

const baseURL = "https://localhost:7173/api/Test";
const postURL = "https://localhost:7173/api/postRoute";

const initialValues = {
  cast: "",
  genres: "",
  movieLengthBelow: "",
  movieLengthAbove: "",
  movieRatingBelow: "",
  movieRatingAbove: "",
  releaseYear: "",
  mediaType:"",
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



export const Test = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          response.data.forEach((element) => {
            setData((prev) => [...prev, element]);
          });
        }
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const mapData = (values) => {
    const castArray = values.cast.split(',').map(actor => actor.trim());
    const genresArray = values.genres.split(',').map(genre => genre.trim());
    
    const data = {
      cast: castArray,
      genres: genresArray,
      movieLengthBelow:values.movieLengthBelow,
      movieLengthAbove:values.movieLengthAbove,
      movieRatingBelow:values.movieRatingBelow,
      movieRatingAbove:values.movieRatingAbove,
      releaseYear:values.releaseYear,
    };
    return data;
  }

  const handleSubmit = (values) => {
    const data = mapData(values);
    console.log(data);
    axios
      .post(postURL, data, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error("Error posting data:", error));
  }
  

  return (
    <div className="flex justify-center align-middle">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
     {({isSubmiting, values}) => (
        <Form className="flex flex-col justify-center align-middle">
          <div className="flex flex-col justify-center align-middle">
            <label htmlFor="cast">Cast</label>
            <Field type="text" id="cast" name="cast" className = " border-2 border-black"/>
            <ErrorMessage name="cast" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <label htmlFor="genres">Genres</label>
            <Field type="text" id="genres" name="genres"className = " border-2 border-black" />
            <ErrorMessage name="genres" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <label htmlFor="movieLengthBelow">Movie Length Below</label>
            <Field type="number" id="movieLengthBelow" name="movieLengthBelow" className = " border-2 border-black"/>
            <ErrorMessage name="movieLengthBelow" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <label htmlFor="movieLengthAbove">Movie Length Above</label>
            <Field type="number" id="movieLengthAbove" name="movieLengthAbove" className = " border-2 border-black"/>
            <ErrorMessage name="movieLengthAbove" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <label htmlFor="movieRatingBelow">Movie Rating Below</label>
            <Field type="number" id="movieRatingBelow" name="movieRatingBelow" className = " border-2 border-black"/>
            <ErrorMessage name="movieRatingBelow" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <label htmlFor="movieRatingAbove">Movie Rating Above</label>
            <Field type="number" id="movieRatingAbove" name="movieRatingAbove" className = " border-2 border-black"/>
            <ErrorMessage name="movieRatingAbove" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <label htmlFor="releaseYear">Release Year</label>
            <Field type="number" id="releaseYear" name="releaseYear" className = " border-2 border-black"/>
            <ErrorMessage name="releaseYear" className=" text-red-500" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <label htmlFor="mediaType">Media Type</label>
            <Field type="text" id="mediaType" name="mediaType" className = " border-2 border-black"/>
            <ErrorMessage name="mediaType" />
          </div>
          <button type="submit">Submit</button>
        </Form>
     )}
      </Formik>
    </div>
  );
};
