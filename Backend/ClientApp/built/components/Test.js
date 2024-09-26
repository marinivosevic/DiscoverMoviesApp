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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var formik_1 = require("formik");
var Yup = __importStar(require("yup"));
var movie_1 = require("../api/movie");
var initialValues = {
    cast: "",
    genres: "",
    movieLengthBelow: 500,
    movieLengthAbove: 0,
    movieRatingBelow: 11,
    movieRatingAbove: 0,
    releaseYear: "",
    mediaType: "",
};
var validationSchema = Yup.object({
    cast: Yup.string(),
    genres: Yup.string(),
    movieLengthBelow: Yup.number(),
    movieLengthAbove: Yup.number(),
    movieRatingBelow: Yup.number(),
    movieRatingAbove: Yup.number(),
    releaseYear: Yup.number(),
    mediaType: Yup.string().required("Required"),
});
var ProtectedRoutes = function () {
    var _a = (0, react_1.useState)([]), movieData = _a[0], setMovieData = _a[1];
    var mapData = function (values) {
        console.log(values);
        var castArray = values.cast ? values.cast.split(",").map(function (actor) { return actor.trim(); }) : [];
        var genresArray = values.genres ? values.genres.split(",").map(function (genre) { return genre.trim(); }) : [];
        var data = {
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
    var handleSubmit = function (values) {
        var data = mapData(values);
        movie_1.movieService.useDiscoverMovies(data).then(function (response) {
            //console.log(response);
            if (response) {
                response.forEach(function (element) {
                    setMovieData(function (prev) { return __spreadArray(__spreadArray([], prev, true), [element], false); });
                });
            }
        });
    };
    return (react_1.default.createElement("div", { className: "flex justify-center align-middle bg-zinc-950" },
        react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validationSchema: validationSchema, onSubmit: handleSubmit }, function (_a) {
            var isSubmitting = _a.isSubmitting;
            return (react_1.default.createElement(formik_1.Form, { className: "flex flex-col justify-center align-middle" },
                react_1.default.createElement("div", { className: "flex flex-col justify-center align-middle" },
                    react_1.default.createElement("label", { htmlFor: "cast" }, "anobasoubd"),
                    react_1.default.createElement(formik_1.Field, { type: "text", id: "cast", name: "cast", className: "border-2 border-black" }),
                    react_1.default.createElement(formik_1.ErrorMessage, { name: "cast" })),
                react_1.default.createElement("div", { className: "flex flex-col justify-center align-middle" },
                    react_1.default.createElement("label", { htmlFor: "genres" }, "Genres"),
                    react_1.default.createElement(formik_1.Field, { type: "text", id: "genres", name: "genres", className: "border-2 border-black" }),
                    react_1.default.createElement(formik_1.ErrorMessage, { name: "genres" })),
                react_1.default.createElement("div", { className: "flex flex-col justify-center align-middle" },
                    react_1.default.createElement("label", { htmlFor: "movieLengthBelow" }, "Movie Length Below"),
                    react_1.default.createElement(formik_1.Field, { type: "number", id: "movieLengthBelow", name: "movieLengthBelow", className: "border-2 border-black" }),
                    react_1.default.createElement(formik_1.ErrorMessage, { name: "movieLengthBelow" })),
                react_1.default.createElement("div", { className: "flex flex-col justify-center align-middle" },
                    react_1.default.createElement("label", { htmlFor: "movieLengthAbove" }, "Movie Length Above"),
                    react_1.default.createElement(formik_1.Field, { type: "number", id: "movieLengthAbove", name: "movieLengthAbove", className: "border-2 border-black" }),
                    react_1.default.createElement(formik_1.ErrorMessage, { name: "movieLengthAbove" })),
                react_1.default.createElement("div", { className: "flex flex-col justify-center align-middle" },
                    react_1.default.createElement("label", { htmlFor: "movieRatingBelow" }, "Movie Rating Below"),
                    react_1.default.createElement(formik_1.Field, { type: "number", id: "movieRatingBelow", name: "movieRatingBelow", className: "border-2 border-black" }),
                    react_1.default.createElement(formik_1.ErrorMessage, { name: "movieRatingBelow" })),
                react_1.default.createElement("div", { className: "flex flex-col justify-center align-middle" },
                    react_1.default.createElement("label", { htmlFor: "movieRatingAbove" }, "Movie Rating Above"),
                    react_1.default.createElement(formik_1.Field, { type: "number", id: "movieRatingAbove", name: "movieRatingAbove", className: "border-2 border-black" }),
                    react_1.default.createElement(formik_1.ErrorMessage, { name: "movieRatingAbove" })),
                react_1.default.createElement("div", { className: "flex flex-col justify-center align-middle" },
                    react_1.default.createElement("label", { htmlFor: "releaseYear" }, "Release Year"),
                    react_1.default.createElement(formik_1.Field, { type: "number", id: "releaseYear", name: "releaseYear", className: "border-2 border-black" }),
                    react_1.default.createElement(formik_1.ErrorMessage, { name: "releaseYear" })),
                react_1.default.createElement("div", { className: "flex flex-col justify-center align-middle" },
                    react_1.default.createElement("label", { htmlFor: "mediaType" }, "Media Type"),
                    react_1.default.createElement(formik_1.Field, { type: "text", id: "mediaType", name: "mediaType", className: "border-2 border-black" }),
                    react_1.default.createElement(formik_1.ErrorMessage, { name: "mediaType" })),
                isSubmitting ? react_1.default.createElement("div", null, "fndsaoifn...") : react_1.default.createElement("button", { type: "submit" }, "Submit")));
        }),
        movieData.map(function (movie) { return (react_1.default.createElement("h2", { key: movie.id }, movie.title)); })));
};
exports.default = ProtectedRoutes;
