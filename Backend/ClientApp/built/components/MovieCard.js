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
var React = __importStar(require("react"));
var AspectRatio_1 = __importDefault(require("@mui/joy/AspectRatio"));
var Card_1 = __importDefault(require("@mui/joy/Card"));
var CardContent_1 = __importDefault(require("@mui/joy/CardContent"));
var CardOverflow_1 = __importDefault(require("@mui/joy/CardOverflow"));
var Divider_1 = __importDefault(require("@mui/joy/Divider"));
var Rating_1 = __importDefault(require("@mui/material/Rating"));
var Typography_1 = __importDefault(require("@mui/joy/Typography"));
var genres = [
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
var MovieCard = function (_a) {
    var props = _a.props;
    var backdrop_path = props.backdrop_path, original_title = props.original_title, genre_ids = props.genre_ids, overview = props.overview, vote_average = props.vote_average, release_date = props.release_date;
    return (React.createElement(Card_1.default, { variant: "soft", sx: { width: 320, bgcolor: "#090A0A" } },
        React.createElement(CardOverflow_1.default, null,
            React.createElement(AspectRatio_1.default, { ratio: "2" },
                React.createElement("img", { src: "https://image.tmdb.org/t/p/w500".concat(backdrop_path), srcSet: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x", loading: "lazy", alt: "" }))),
        React.createElement(CardContent_1.default, null,
            React.createElement(Typography_1.default, { level: "title-md", textColor: 'white' },
                React.createElement("strong", null, props.original_title)),
            React.createElement(Typography_1.default, { level: "body-sm", textColor: 'white' }, genres.filter(function (g) { return genre_ids.includes(g.id); }).map(function (g) { return g.name; }).join(", ")),
            React.createElement(Typography_1.default, { level: "body-xs", textColor: 'gray' }, overview.substring(0, 100)),
            React.createElement(Typography_1.default, { level: "body-xs", textColor: "white" }, release_date.substring(0, 4))),
        React.createElement(CardOverflow_1.default, { variant: "soft", sx: { bgcolor: "#313434" } },
            React.createElement(Divider_1.default, { inset: "context" }),
            React.createElement(CardContent_1.default, { orientation: "horizontal" },
                React.createElement(Typography_1.default, { level: "body-xs", fontWeight: "md", textColor: "white" },
                    React.createElement(Rating_1.default, { name: "half-rating-read", value: vote_average / 2, precision: 0.25, readOnly: true })),
                React.createElement("div", { className: ' mt-1 ' },
                    React.createElement(Typography_1.default, { fontSize: 'sm', fontWeight: "md", textColor: "white" }, vote_average))))));
};
exports.default = MovieCard;
