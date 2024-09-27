"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var formik_1 = require("formik");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Slider_1 = __importDefault(require("@mui/material/Slider"));
function valuetext(value) {
    return "".concat(value, "\u00B0C");
}
var FormikSlider = function (_a) {
    var nameBelow = _a.nameBelow, nameAbove = _a.nameAbove, min = _a.min, max = _a.max;
    var _b = (0, formik_1.useFormikContext)(), values = _b.values, setFieldValue = _b.setFieldValue;
    var _c = react_1.default.useState([values[nameBelow], values[nameAbove]]), value = _c[0], setValue = _c[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
        setFieldValue(nameBelow, newValue[0]);
        setFieldValue(nameAbove, newValue[1]);
    };
    return (react_1.default.createElement(Box_1.default, { sx: { width: 300, } },
        react_1.default.createElement(Slider_1.default, { getAriaLabel: function () { return 'Temperature range'; }, value: value, onChange: handleChange, valueLabelDisplay: "auto", getAriaValueText: valuetext, min: min, max: max, sx: { color: '#26a8c4' } })));
};
exports.default = FormikSlider;
