import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Stack, TextField } from "@fluentui/react";

const baseURL = "https://localhost:7173/api/Test";
const postURL = "https://localhost:7173/api/postRoute";

const initialValues = {
  mediaTitle: "",
  mediaType: "",
};

const validationSchema = Yup.object({
  mediaTitle: Yup.string().required("Required"),
  mediaType: Yup.string().required("Required"),
});

export const Test = () => {
  const [data, setData] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      if (response.data && response.data.results) {
        setData(response.data.results);
      }
    }).catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    try {
      const response = await axios.get(postURL, {
        params: {
          key1: values.mediaTitle,
          type: values.mediaType,
        },
      });

      if (response.data && response.data.results) {
        setSimilarMovies((prev) => [...prev, ...response.data.results]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setSubmitting(false);
  };

  return (
    <div>
      {data.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className=" flex flex-col">
              <label htmlFor="mediaTitle">Media Title</label>
              <Field label="Media Title" name="mediaTitle" type="text" placeholder="Media Title" className="border border-gray-800" />
             
              <ErrorMessage name="mediaTitle" component="div" />
            </div>
            <div className=" flex flex-col">
            <label htmlFor="mediaType">Media Title</label>
            <Field label="Media Type" name="mediaType" type="text" placeholder="Media Title" className="border border-gray-800" />
              
              <ErrorMessage name="mediaType" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    
      {similarMovies.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  );
};
