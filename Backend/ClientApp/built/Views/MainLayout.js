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
var DiscoverMovieForm_1 = __importDefault(require("../components/DiscoverMovieForm"));
var MovieGridDisplay_1 = __importDefault(require("../components/MovieGridDisplay"));
var MainLayout = function () {
    var _a = (0, react_1.useState)([]), movies = _a[0], setMovies = _a[1];
    return (react_1.default.createElement("div", null, movies.length > 0 ? (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "flex justify-center align-middle my-6" },
            react_1.default.createElement("button", { type: "button", onClick: function () { return setMovies([]); }, className: "text-white bg-[#26a8c4] hover:hover:bg-[#3ea1b8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#26a8c4] dark:hover:bg-[#3ea1b8] dark:focus:ring-blue-800" }, "Find New Movie")),
        react_1.default.createElement(MovieGridDisplay_1.default, { movies: movies }))) : (react_1.default.createElement(DiscoverMovieForm_1.default, { setMovies: setMovies }))));
};
exports.default = MainLayout;
