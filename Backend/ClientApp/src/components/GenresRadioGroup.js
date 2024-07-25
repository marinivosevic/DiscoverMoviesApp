import React, { useState } from "react";
import { useFormikContext } from "formik";

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
  { id: 37, name: "Western" },
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

  

  return (
    <div>
      <table className="table-auto w-full mx-2">
        <tbody className="grid grid-cols-2 lg:grid-cols-3 gap-2 w-full ">
          {displayedGenres.map((genre) => (
            <tr key={genre.id} className="contents ">
              <td className="border rounded-xl border-gray-600 px-3  py-2 ">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    id={genre.name}
                    name={name}
                    value={genre.name}
                    onChange={handleChange}
                    checked={values[name].includes(genre.name)}
                    className="mr-2 leading-tight"
                  />
                  <p className="text-white truncate text-sm">{genre.name}</p>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        type="button"
        onClick={handleShowMore}
        className="mt-2 ml-2 bg-[#26a8c4] hover:bg-[#3ea1b8] text-white px-4 py-2 rounded"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default GenreSelector;
