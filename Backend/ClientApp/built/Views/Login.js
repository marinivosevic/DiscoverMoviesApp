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
var formik_1 = require("formik");
var Button_1 = __importDefault(require("@mui/joy/Button"));
var react_1 = __importDefault(require("react"));
var Yup = __importStar(require("yup"));
var LoginSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string()
        .required("Required")
        .min(6, "Password is too short")
        .max(20, "Password is too long")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/, "Password must contain at least one letter and one number"),
});
var Login = function () {
    var initialValues = {
        username: "",
        password: "",
    };
    var handleSubmit = function (values, _a) {
        var setSubmitting = _a.setSubmitting;
        console.log(values);
        setSubmitting(false);
    };
    return (react_1.default.createElement("div", { className: "h-screen flex" },
        react_1.default.createElement("div", { className: "w-1/2 bg-[#4ec7e2] flex justify-center items-center" },
            react_1.default.createElement("div", { className: "text-center text-white text-2xl" }, "Find your movie")),
        react_1.default.createElement("div", { className: "w-1/2 flex justify-center items-center bg-gray-800" },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validationSchema: LoginSchema, onSubmit: handleSubmit }, function (_a) {
                var isSubmitting = _a.isSubmitting;
                return (react_1.default.createElement(formik_1.Form, { className: "w-3/4 max-w-md" },
                    react_1.default.createElement("h1", { className: " flex items-center text-white justify-center text-3xl mb-5 " }, "Login"),
                    react_1.default.createElement("div", { className: "flex flex-col gap-4" },
                        react_1.default.createElement("div", { className: "flex flex-col" },
                            react_1.default.createElement("label", { htmlFor: "username", className: "mb-1 text-white" }, "Username"),
                            react_1.default.createElement(formik_1.Field, { type: "text", name: "username", className: "rounded-lg w-full h-12 p-2" }),
                            react_1.default.createElement(formik_1.ErrorMessage, { name: "username", component: "div", className: "text-red-500" })),
                        react_1.default.createElement("div", { className: "flex flex-col" },
                            react_1.default.createElement("label", { htmlFor: "password", className: "mb-1 text-white" }, "Password"),
                            react_1.default.createElement(formik_1.Field, { type: "password", name: "password", className: "rounded-lg w-full h-12 p-2" }),
                            react_1.default.createElement(formik_1.ErrorMessage, { name: "password", component: "div", className: "text-red-500" })),
                        react_1.default.createElement(Button_1.default, { type: "submit", disabled: isSubmitting, className: "mt-4 p-2 bg-blue-500 text-white rounded-lg" }, "Submit"),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("div", { className: "text-white text-center mt-4" },
                                "Don't have an account?",
                                " ",
                                react_1.default.createElement("a", { href: "/register", className: "text-blue-500" }, "Register"))))));
            }))));
};
exports.default = Login;
