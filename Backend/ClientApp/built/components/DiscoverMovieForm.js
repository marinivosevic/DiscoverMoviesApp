"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var formik_1 = require("formik");
var Yup = __importStar(require("yup"));
var movie_1 = require("../api/movie");
var FormikSlider_1 = __importDefault(require("./FormikSlider"));
var MediaGroup_1 = __importDefault(require("./MediaGroup"));
var GenresRadioGroup_1 = __importDefault(require("./GenresRadioGroup"));
var CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
var initialValues = {
    cast: "",
    genres: "",
    movieLengthBelow: "",
    movieLengthAbove: "",
    movieRatingBelow: "",
    movieRatingAbove: "",
    releaseYear: "",
    mediaType: "",
};
var validationSchema = Yup.object({
    cast: Yup.string(),
    genres: Yup.array(),
    movieLengthBelow: Yup.number(),
    movieLengthAbove: Yup.number(),
    movieRatingBelow: Yup.number(),
    movieRatingAbove: Yup.number(),
    releaseYear: Yup.number(),
    mediaType: Yup.string().required("Required"),
});
var DiscoverMovieForm = function (_a) {
    var setMovies = _a.setMovies;
    var mapData = function (values) {
        var castArray = values.cast
            ? values.cast.split(",").map(function (actor) { return actor.trim(); })
            : [];
        var data = {
            cast: castArray,
            genres: values.genres,
            movieLengthBelow: values.movieLengthBelow !== "" ? values.movieLengthBelow : 500,
            movieLengthAbove: values.movieLengthAbove !== "" ? values.movieLengthAbove : 0,
            movieRatingBelow: values.movieRatingBelow !== "" ? values.movieRatingBelow : 11,
            movieRatingAbove: values.movieRatingAbove !== "" ? values.movieRatingAbove : 0,
            releaseYear: values.releaseYear || 0,
        };
        return data;
    };
    var handleSubmit = function (values) {
        var data = mapData(values);
        console.log(data);
        movie_1.movieService.useDiscoverMovies(data).then(function (response) {
            console.log(response);
            if (response) {
                setMovies(response);
            }
        });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "flex justify-center align-middle" },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validationSchema: validationSchema, onSubmit: handleSubmit }, function (_a) {
                var isSubmitting = _a.isSubmitting;
                return (react_1.default.createElement(formik_1.Form, { className: "w-full  sm:m-3 " },
                    react_1.default.createElement("div", { className: "flex flex-col sm:flex-row w-full  space-x-4 " },
                        react_1.default.createElement("div", { className: "flex-1" },
                            react_1.default.createElement("div", { className: "flex flex-col justify-center align-middle ml-2" },
                                react_1.default.createElement("label", { className: "flex justify-center text-white", htmlFor: "cast" }, "Cast"),
                                react_1.default.createElement(formik_1.Field, { type: "text", id: "cast", name: "cast", className: "block w-full p-2 text-gray-900   rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" }),
                                react_1.default.createElement(formik_1.ErrorMessage, { name: "cast" })),
                            react_1.default.createElement("h3", { className: "flex justify-center my-3 text-white" }, "Genres"),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement(GenresRadioGroup_1.default, { name: "genres" }))),
                        react_1.default.createElement("div", { className: "flex-1 " },
                            react_1.default.createElement("h3", { className: "flex justify-center text-white" }, "Movie Length"),
                            react_1.default.createElement("div", { className: "flex justify-center align-middle" },
                                react_1.default.createElement(FormikSlider_1.default, { nameAbove: "movieLengthBelow", nameBelow: "movieLengthAbove" // ovo je naopako ali radi lol
                                    , getAriaLabel: function () { return "Movie Length"; }, min: 30, max: 300 })),
                            react_1.default.createElement("h3", { className: "flex justify-center text-white" }, "Movie Rating"),
                            react_1.default.createElement("div", { className: "flex  justify-center align-middle" },
                                react_1.default.createElement(FormikSlider_1.default, { nameAbove: "movieRatingBelow", nameBelow: "movieRatingAbove" // ovo je naopako ali radi lol
                                    , getAriaLabel: function () { return "Movie Rating"; }, min: 0, max: 10 }))),
                        react_1.default.createElement("div", { className: "flex-1" },
                            react_1.default.createElement("div", { className: "flex flex-col justify-center align-middle mr-3" },
                                react_1.default.createElement("label", { className: "flex justify-center text-white", htmlFor: "releaseYear" }, "Release Year"),
                                react_1.default.createElement(formik_1.Field, { type: "number", id: "releaseYear", name: "releaseYear", className: "block w-full p-2 text-gray-900  rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" }),
                                react_1.default.createElement(formik_1.ErrorMessage, { name: "releaseYear" })),
                            react_1.default.createElement("div", { className: "flex flex-col my-3 justify-center align-middle" },
                                react_1.default.createElement(MediaGroup_1.default, { name: "mediaType" }),
                                react_1.default.createElement(formik_1.ErrorMessage, { name: "mediaType" })))),
                    react_1.default.createElement("div", { className: " flex justify-center align-middle" }, isSubmitting ? (react_1.default.createElement("div", null,
                        react_1.default.createElement(CircularProgress_1.default, null))) : (react_1.default.createElement("button", { type: "submit", className: " text-white bg-[#26a8c4] hover:bg-[#3ea1b8] px-10 py-2 rounded-full" }, "Submit")))));
            }))));
};
exports.default = DiscoverMovieForm;
