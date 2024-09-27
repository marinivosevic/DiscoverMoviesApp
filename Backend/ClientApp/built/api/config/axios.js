"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosInstance = void 0;
var axios_1 = __importDefault(require("axios"));
var headers = {
    "Content-Type": "application/json",
};
var baseURL = "https://localhost:7173/api" /* "http://findmymovie.eu-central-1.elasticbeanstalk.com/api/" */;
exports.axiosInstance = axios_1.default.create({
    baseURL: baseURL,
    headers: headers,
});
