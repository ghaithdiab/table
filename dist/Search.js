'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function Search(_ref) {
  var data = _ref.data,
      handleDisplayedData = _ref.handleDisplayedData,
      handleIsSearching = _ref.handleIsSearching;

  // Filter the data to display based on typed value
  var handleSearch = function handleSearch(evt) {
    var value = (0, _utils.normalizeText)(evt.target.value);
    if (value.length > 0) {
      var dataToDisplay = data.filter(function (elt) {
        var values = Object.values(elt).map(function (val) {
          return (0, _utils.normalizeText)(val);
        }).join(" ");
        return values.includes(value);
      });
      handleDisplayedData(dataToDisplay);
      handleIsSearching(true);
    } else {
      handleDisplayedData(data);
      handleIsSearching(false);
    }
  };
  return _react2.default.createElement(
    'div',
    { className: 'dtb-search' },
    _react2.default.createElement(
      'label',
      { htmlFor: 'dtb-search' },
      'Search: '
    ),
    _react2.default.createElement('input', { type: 'text', id: 'dtb-search', name: 'dtb-search', onChange: function onChange(evt) {
        return handleSearch(evt);
      } })
  );
};
Search.propTypes = {
  data: _propTypes2.default.array.isRequired,
  handleDisplayedData: _propTypes2.default.func.isRequired,
  handleIsSearching: _propTypes2.default.func.isRequired
};

exports.default = Search;