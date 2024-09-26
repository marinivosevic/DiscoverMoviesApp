"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var NavMenu_1 = require("../components/NavMenu");
var Root = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(NavMenu_1.NavMenu, null),
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
};
exports.default = Root;
