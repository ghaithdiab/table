'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(_ref) {
  var currentPage = _ref.currentPage,
      totalEntries = _ref.totalEntries,
      displayedEntries = _ref.displayedEntries,
      handleClick = _ref.handleClick;


  var nbPages = Math.ceil(totalEntries / displayedEntries);
  var nbPagesArray = new Array(nbPages).fill(0);

  // handle the click to the previous page
  var handlePreviousPage = function handlePreviousPage() {
    if (currentPage > 1) handleClick(currentPage - 1);
  };

  // handle the click to the next page
  var handleNextPage = function handleNextPage() {
    if (currentPage < nbPages) handleClick(currentPage + 1);
  };

  return _react2.default.createElement(
    'div',
    { className: 'dtb-pagination' },
    _react2.default.createElement(
      'button',
      { type: 'button', onClick: handlePreviousPage, className: currentPage === 1 ? 'dtb-pagination-btn displayed' : 'dtb-pagination-btn' },
      'Previous'
    ),
    nbPagesArray.map(function (elt, index) {
      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          key: "_" + Math.random().toString(36).substring(2, 9),
          onClick: function onClick() {
            return handleClick(index + 1);
          },
          className: currentPage === index + 1 ? "dtb-pagination-btn active" : "dtb-pagination-btn"
        },
        index + 1
      );
    }),
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        onClick: handleNextPage,
        className: currentPage === nbPages ? "dtb-pagination-btn disabled" : "dtb-pagination-btn"
      },
      'Next'
    )
  );
};
Pagination.propTypes = {
  currentPage: _propTypes2.default.number.isRequired,
  totalEntries: _propTypes2.default.number.isRequired,
  displayedEntries: _propTypes2.default.number.isRequired,
  handleClick: _propTypes2.default.func.isRequired
};
exports.default = Pagination;