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
exports.AuthProvider = void 0;
var react_1 = __importStar(require("react"));
var axios_1 = __importDefault(require("axios"));
var AuthContext = (0, react_1.createContext)(null);
var AuthProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(localStorage.getItem("token")), token = _b[0], setToken_ = _b[1];
    var setToken = function (newToken) {
        setToken_(newToken);
    };
    (0, react_1.useEffect)(function () {
        if (token) {
            axios_1.default.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token', token);
        }
        else {
            delete axios_1.default.defaults.headers.common["Authorization"];
            localStorage.removeItem('token');
        }
    }, [token]);
    var contextValue = (0, react_1.useMemo)(function () { return ({
        token: token,
        setToken: setToken,
        active: !!token,
    }); }, [token]);
    return react_1.default.createElement(AuthContext.Provider, { value: contextValue }, children);
};
exports.AuthProvider = AuthProvider;
exports.default = AuthContext;
