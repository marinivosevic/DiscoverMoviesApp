"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MovieCard_1 = __importDefault(require("./MovieCard"));
var react_router_dom_1 = require("react-router-dom");
var MovieGridDisplay = function (_a) {
    var movies = _a.movies;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "flex justify-center align-middle my-6 " }),
        react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-4  gap-2 justify-center w-full ml-3 px-5 mt-2" }, movies.map(function (movie) { return (react_1.default.createElement(react_router_dom_1.Link, { to: "/movie/".concat(movie.id), key: movie.title },
            react_1.default.createElement(MovieCard_1.default, { props: movie }))); }))));
};
exports.default = MovieGridDisplay;
