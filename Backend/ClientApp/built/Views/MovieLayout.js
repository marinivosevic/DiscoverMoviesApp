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
var react_1 = __importStar(require("react"));
var movie_1 = require("../api/movie");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("react");
var material_1 = require("@mui/material");
var Rating_1 = __importDefault(require("@mui/material/Rating"));
var Typography_1 = __importDefault(require("@mui/joy/Typography"));
var genres_ids = [
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
var MovieLayout = function () {
    var id = (0, react_router_dom_1.useParams)().id;
    var _a = (0, react_2.useState)(null), movie = _a[0], setMovie = _a[1];
    var _b = (0, react_2.useState)(null), credits = _b[0], setCredits = _b[1];
    (0, react_1.useEffect)(function () {
        try {
            movie_1.movieService.useGetMovieDetails({ id: id }).then(function (data) {
                setMovie(data);
                console.log(data);
            });
            movie_1.movieService.useGetMovieCredits({ id: id }).then(function (data) {
                setCredits(data);
                console.log(data);
            });
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [id]);
    return (react_1.default.createElement("div", null, (movie && credits) && (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: " flex flex-col sm:flex-row" },
            react_1.default.createElement("div", { className: " flex w-1/3 mt-10 ml-32" },
                react_1.default.createElement("img", { className: "  w-64 h-auto", src: "https://image.tmdb.org/t/p/w500".concat(movie.posterPath), alt: "" })),
            react_1.default.createElement("div", { className: " flex w-full sm:w-2/3 mr-32 mt-10 align-middle justify-center" },
                react_1.default.createElement("div", { className: " flex flex-col  justify-center align-middle mx-4" },
                    react_1.default.createElement("h1", { className: " flex flex-row  text-4xl text-white" },
                        movie.title,
                        " (",
                        movie.releaseDate.substring(0, 4),
                        ")"),
                    react_1.default.createElement(Typography_1.default, { level: "body-sm", textColor: "gray" }, movie.genres
                        .map(function (genre) {
                        var genreName = genres_ids.find(function (g) { return g.id === genre.id; });
                        return genreName.name;
                    })
                        .join(", ")),
                    react_1.default.createElement("p", { className: " mt-4 text-white" }, movie.overview),
                    react_1.default.createElement("p", { className: " mt-4 text-white" },
                        "Runtime: ",
                        react_1.default.createElement("strong", { className: " text-gray-300" }, movie.runtime),
                        " min"),
                    react_1.default.createElement("div", { className: " flex flex-row mt-4" },
                        react_1.default.createElement(material_1.Divider, { orientation: "vertical", flexItem: true }),
                        react_1.default.createElement(Typography_1.default, { level: "body-xs", fontWeight: "md", textColor: "white" },
                            react_1.default.createElement(Rating_1.default, { name: "half-rating-read", value: movie.voteAverage / 2, precision: 0.25, readOnly: true })),
                        react_1.default.createElement("div", { className: " mt-1 " },
                            react_1.default.createElement(Typography_1.default, { fontSize: "sm", fontWeight: "md", textColor: "white" }, movie.voteAverage)))))),
        react_1.default.createElement("div", { className: " flex flex-col mt-10 m-32" },
            react_1.default.createElement("h1", { className: " text-2xl text-white mb-2" }, "Cast"),
            react_1.default.createElement("div", { className: " grid grid-rows-5  sm:grid-cols-5   gap-10" }, credits.cast.slice(0, 5).map(function (actor) { return (react_1.default.createElement("div", { key: actor.id, className: " flex flex-col ml-4 w-full h-auto" },
                react_1.default.createElement("img", { className: " w-52 h-auto rounded-full", src: "https://image.tmdb.org/t/p/w500".concat(actor.profilePath), alt: "" }),
                react_1.default.createElement("p", { className: " text-white mt-2" }, actor.name),
                react_1.default.createElement("p", { className: " text-gray-300" }, actor.character))); })))))));
};
exports.default = MovieLayout;
