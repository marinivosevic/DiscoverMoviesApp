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
var GenreSelector = function (_a) {
    var name = _a.name;
    var _b = (0, react_1.useState)(false), showAll = _b[0], setShowAll = _b[1];
    var _c = (0, formik_1.useFormikContext)(), setFieldValue = _c.setFieldValue, values = _c.values;
    var displayedGenres = showAll ? genres : genres.slice(0, 8);
    var handleShowMore = function () { return setShowAll(!showAll); };
    var handleChange = function (event) {
        var _a = event.target, value = _a.value, checked = _a.checked;
        var selectedGenres = __spreadArray([], values[name], true);
        if (checked) {
            selectedGenres.push(value);
        }
        else {
            var index = selectedGenres.indexOf(value);
            if (index > -1) {
                selectedGenres.splice(index, 1);
            }
        }
        setFieldValue(name, selectedGenres);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("table", { className: "table-auto w-full mx-2" },
            react_1.default.createElement("tbody", { className: "grid grid-cols-2 lg:grid-cols-3 gap-2 w-full " }, displayedGenres.map(function (genre) { return (react_1.default.createElement("tr", { key: genre.id, className: "contents " },
                react_1.default.createElement("td", { className: "border rounded-xl border-gray-600 px-3  py-2 " },
                    react_1.default.createElement("label", { className: "flex items-center" },
                        react_1.default.createElement("input", { type: "checkbox", id: genre.name, name: name, value: genre.name, onChange: handleChange, checked: values[name].includes(genre.name), className: "mr-2 leading-tight" }),
                        react_1.default.createElement("p", { className: "text-white truncate text-sm" }, genre.name))))); }))),
        react_1.default.createElement("button", { type: "button", onClick: handleShowMore, className: "mt-2 ml-2 bg-[#26a8c4] hover:bg-[#3ea1b8] text-white px-4 py-2 rounded" }, showAll ? "Show Less" : "Show More")));
};
exports.default = GenreSelector;
