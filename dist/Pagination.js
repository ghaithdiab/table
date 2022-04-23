"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(_ref) {
  var currentPage = _ref.currentPage,
      totalEntries = _ref.totalEntries,
      displayedEntries = _ref.displayedEntries,
      handleClick = _ref.handleClick;
  var nbPages = Math.ceil(totalEntries / displayedEntries);
  var nbPagesArray = new Array(nbPages).fill(0); // handle the click to the previous page

  var handlePreviousPage = function handlePreviousPage() {
    if (currentPage > 1) handleClick(currentPage - 1);
  }; // handle the click to the next page


  var handleNextPage = function handleNextPage() {
    if (currentPage < nbPages) handleClick(currentPage + 1);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dtb-pagination"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: handlePreviousPage,
    className: currentPage === 1 ? 'dtb-pagination-btn displayed' : 'dtb-pagination-btn'
  }, "Previous"), nbPagesArray.map(function (elt, index) {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      key: "_" + Math.random().toString(36).substring(2, 9),
      onClick: function onClick() {
        return handleClick(index + 1);
      },
      className: currentPage === index + 1 ? "dtb-pagination-btn active" : "dtb-pagination-btn"
    }, index + 1);
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: handleNextPage,
    className: currentPage === nbPages ? "dtb-pagination-btn disabled" : "dtb-pagination-btn"
  }, "Next"));
};

Pagination.propTypes = {
  currentPage: _propTypes.default.number.isRequired,
  totalEntries: _propTypes.default.number.isRequired,
  displayedEntries: _propTypes.default.number.isRequired,
  handleClick: _propTypes.default.func.isRequired
};
var _default = Pagination;
exports.default = _default;