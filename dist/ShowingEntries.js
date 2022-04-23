"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowingEntries = function ShowingEntries(_ref) {
  var minShow = _ref.minShow,
      maxShow = _ref.maxShow,
      totalEntries = _ref.totalEntries,
      isSearching = _ref.isSearching,
      minFiltredShow = _ref.minFiltredShow,
      maxFiltredShow = _ref.maxFiltredShow,
      totalEntriesShow = _ref.totalEntriesShow;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dtb-showing"
  }, isSearching ? /*#__PURE__*/_react.default.createElement("span", null, "Showing ".concat(minFiltredShow, " to ").concat(maxFiltredShow, " of ").concat(totalEntriesShow, " entries (Filtered from ").concat(totalEntries, " total entries)")) : /*#__PURE__*/_react.default.createElement("span", null, "Showing ".concat(minShow, " to ").concat(maxShow, " of ").concat(totalEntries, " entries")));
};

ShowingEntries.propTypes = {
  minShow: _propTypes.default.number.isRequired,
  maxShow: _propTypes.default.number.isRequired,
  totalEntries: _propTypes.default.number.isRequired,
  minFilteredShow: _propTypes.default.number,
  maxFilteredShow: _propTypes.default.number.isRequired,
  totalEntriesShow: _propTypes.default.number.isRequired,
  isSearching: _propTypes.default.bool
};
var _default = ShowingEntries;
exports.default = _default;