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
require("bootstrap/dist/css/bootstrap.css");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var serviceWorkerRegistration = __importStar(require("./serviceWorkerRegistration"));
var Root_1 = __importDefault(require("./Views/Root"));
var MovieLayout_1 = __importDefault(require("./Views/MovieLayout"));
var ErrorPage_1 = __importDefault(require("./components/ErrorPage"));
require("./custom.css");
var MainLayout_1 = __importDefault(require("./Views/MainLayout"));
var Login_1 = __importDefault(require("./Views/Login"));
var Register_1 = __importDefault(require("./Views/Register"));
var ProtectedRoutes_1 = __importDefault(require("./Routes/ProtectedRoutes"));
var Profile_1 = __importDefault(require("./Views/Profile"));
var AuthProvider_1 = require("./Context/AuthProvider");
var react_1 = __importDefault(require("react"));
var router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: react_1.default.createElement(Root_1.default, null),
        errorElement: react_1.default.createElement(ErrorPage_1.default, null),
        children: [
            {
                index: true,
                element: react_1.default.createElement(MainLayout_1.default, null),
            },
            {
                path: "movie/:id",
                element: react_1.default.createElement(MovieLayout_1.default, null),
            }
        ],
    },
    {
        path: "/profile",
        element: react_1.default.createElement(ProtectedRoutes_1.default, { layout: MainLayout_1.default }),
        errorElement: react_1.default.createElement(ErrorPage_1.default, null),
        children: [
            {
                index: true,
                element: react_1.default.createElement(Profile_1.default, null),
            },
        ],
    },
    {
        path: "/Login",
        element: react_1.default.createElement(Login_1.default, null),
        errorElement: react_1.default.createElement(ErrorPage_1.default, null),
    },
    {
        path: "/Register",
        element: react_1.default.createElement(Register_1.default, null),
        errorElement: react_1.default.createElement(ErrorPage_1.default, null),
    }
]);
(0, client_1.createRoot)(document.getElementById("root")).render(react_1.default.createElement(AuthProvider_1.AuthProvider, null,
    react_1.default.createElement(react_router_dom_1.RouterProvider, { router: router })));
serviceWorkerRegistration.unregister();
