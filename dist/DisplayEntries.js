"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Select element to chose the number of rows to display
 */
var DisplayEntries = function DisplayEntries(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dtb-entries"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "dtb-entries-select"
  }, "Show "), /*#__PURE__*/_react.default.createElement("select", {
    name: "table-enties",
    id: "dtb-entries-select",
    value: value,
    onChange: function onChange(evt) {
      return handleChange(evt);
    }
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/_react.default.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/_react.default.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/_react.default.createElement("option", {
    value: "100"
  }, "100")), /*#__PURE__*/_react.default.createElement("span", null, " entries"));
};

DisplayEntries.propTypes = {
  value: _propTypes.default.number.isRequired,
  handleChange: _propTypes.default.func.isRequired
};
var _default = DisplayEntries;
exports.default = _default;