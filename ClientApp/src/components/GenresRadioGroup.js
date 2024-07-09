import React, { useState } from 'react';
import { useField, useFormikContext } from "formik";

const genres = [
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
  { id: 37, name: "Western" }
];

const GenreSelector = ({ name }) => {
  const [showAll, setShowAll] = useState(false);
  const { setFieldValue, values } = useFormikContext();

  const displayedGenres = showAll ? genres : genres.slice(0, 8);

  const handleShowMore = () => setShowAll(!showAll);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    const selectedGenres = [...values[name]];

    if (checked) {
      selectedGenres.push(value);
    } else {
      const index = selectedGenres.indexOf(value);
      if (index > -1) {
        selectedGenres.splice(index, 1);
      }
    }

    setFieldValue(name, selectedGenres);
  };

  const columns = 3; // Number of columns in the table

  return (
    <div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <tbody>
          {Array.from({ length: Math.ceil(displayedGenres.length / columns) }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {displayedGenres.slice(rowIndex * columns, rowIndex * columns + columns).map((genre) => (
                <td key={genre.id} className="border border-gray-300 px-4 py-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      id={genre.name}
                      name={name}
                      value={genre.name}
                      onChange={handleChange}
                      checked={values[name].includes(genre.name)}
                      className="mr-2 text-white"
                    />
                    {genre.name}
                  </label>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        onClick={handleShowMore}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default GenreSelector;
