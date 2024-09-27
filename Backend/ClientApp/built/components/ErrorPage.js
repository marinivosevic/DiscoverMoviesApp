"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ErrorPage = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "404"),
        react_1.default.createElement("h2", null, "Page Not Found")));
};
exports.default = ErrorPage;
