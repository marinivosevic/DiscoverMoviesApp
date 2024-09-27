"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var AuthProvider_1 = __importDefault(require("../Context/AuthProvider"));
var useAuth = function () {
    var context = (0, react_1.useContext)(AuthProvider_1.default);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
exports.default = useAuth;
