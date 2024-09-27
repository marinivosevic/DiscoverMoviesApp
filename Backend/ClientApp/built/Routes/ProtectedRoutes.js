"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var useAuth_1 = __importDefault(require("../Hooks/useAuth"));
var react_2 = __importDefault(require("react"));
var ProtectedRoutes = function (_a) {
    var Layout = _a.layout;
    var token = (0, useAuth_1.default)().token;
    var navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        if (token === null) {
            navigate('/login', { replace: true });
        }
    }, [navigate, token]);
    return react_2.default.createElement(react_router_dom_1.Outlet, null);
};
exports.default = ProtectedRoutes;
