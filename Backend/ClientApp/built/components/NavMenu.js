"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavMenu = void 0;
var react_1 = __importStar(require("react"));
var NavMenu = /** @class */ (function (_super) {
    __extends(NavMenu, _super);
    function NavMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavMenu.prototype.render = function () {
        return (react_1.default.createElement("header", null,
            react_1.default.createElement("nav", { className: " border-gray-200 border-b " },
                react_1.default.createElement("div", { className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto " },
                    react_1.default.createElement("a", { href: "/", className: "flex items-center space-x-3 rtl:space-x-reverse" },
                        react_1.default.createElement("img", { src: "/4c6705a5fdb34cf5ba435b6c4453452c-free-removebg-preview.png", className: "h-16", alt: "Flowbite Logo" }),
                        react_1.default.createElement("span", { className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white" }, "FindYourMovie")),
                    react_1.default.createElement("div", { className: "flex md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse" },
                        react_1.default.createElement("a", { href: "/Login" },
                            react_1.default.createElement("button", { type: "button", className: "text-white bg-[#26a8c4] hover:hover:bg-[#3ea1b8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#26a8c4] dark:hover:bg-[#3ea1b8] dark:focus:ring-blue-800" }, "Login")),
                        react_1.default.createElement("button", { "data-collapse-toggle": "navbar-cta", type: "button", className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600", "aria-controls": "navbar-cta", "aria-expanded": "false" },
                            react_1.default.createElement("span", { className: "sr-only" }, "Open main menu"),
                            react_1.default.createElement("svg", { className: "w-5 h-5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 17 14" },
                                react_1.default.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 1h15M1 7h15M1 13h15" })))),
                    react_1.default.createElement("div", { className: "items-center justify-between hidden w-full md:flex md:w-auto md:order-1", id: "navbar-cta" },
                        react_1.default.createElement("ul", { className: "flex flex-col font-medium p-4 md:p-0 mt-4   rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0" },
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", { href: "#", className: "block py-2 px-3 md:p-0 text-white bg-[#26a8c4] rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500", "aria-current": "page" }, "Home")),
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", { href: "#", className: "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent " }, "About")),
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", { href: "#", className: "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" }, "Services")),
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", { href: "#", className: "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" }, "Contact"))))))));
    };
    NavMenu.displayName = NavMenu.name;
    return NavMenu;
}(react_1.Component));
exports.NavMenu = NavMenu;
