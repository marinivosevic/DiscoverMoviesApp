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
var React = __importStar(require("react"));
var Box_1 = __importDefault(require("@mui/joy/Box"));
var List_1 = __importDefault(require("@mui/joy/List"));
var ListItem_1 = __importDefault(require("@mui/joy/ListItem"));
var ListDivider_1 = __importDefault(require("@mui/joy/ListDivider"));
var Radio_1 = __importDefault(require("@mui/joy/Radio"));
var RadioGroup_1 = __importDefault(require("@mui/joy/RadioGroup"));
var Typography_1 = __importDefault(require("@mui/joy/Typography"));
var formik_1 = require("formik");
function MediaGroup(_a) {
    var name = _a.name;
    var _b = (0, formik_1.useField)(name), field = _b[0], meta = _b[1], helpers = _b[2];
    var handleChange = function (event) {
        helpers.setValue(event.target.value);
    };
    return (React.createElement(Box_1.default, { sx: { minWidth: 240 } },
        React.createElement(Box_1.default, { sx: {
                mb: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            } },
            React.createElement(Typography_1.default, { id: "example-payment-channel-label", level: "title-md", textColor: 'text.secondary', fontWeight: "xl", sx: { color: 'white', alignItems: 'center', justifyContent: 'center' } }, "Select media Type")),
        React.createElement(RadioGroup_1.default, { "aria-labelledby": "example-payment-channel-label", name: name, value: field.value, onChange: handleChange },
            React.createElement(List_1.default, { component: "div", variant: "outlined", orientation: "vertical", sx: {
                    borderRadius: 'sm',
                    boxShadow: 'sm',
                    mr: 2,
                } }, ['Movie', 'Tv-series', 'Both'].map(function (value, index) { return (React.createElement(React.Fragment, { key: value },
                index !== 0 && React.createElement(ListDivider_1.default, null),
                React.createElement(ListItem_1.default, null,
                    React.createElement(Radio_1.default, { id: value, value: value, label: value, sx: { color: 'white' } })))); })))));
}
exports.default = MediaGroup;
