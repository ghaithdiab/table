'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Select element to chose the number of rows to display
 */
var DisplayEntries = function DisplayEntries(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange;

  return _react2.default.createElement(
    'div',
    { className: 'dtb-entries' },
    _react2.default.createElement(
      'label',
      { htmlFor: 'dtb-entries-select' },
      'Show '
    ),
    _react2.default.createElement(
      'select',
      { name: 'table-enties', id: 'dtb-entries-select', value: value, onChange: function onChange(evt) {
          return handleChange(evt);
        } },
      _react2.default.createElement(
        'option',
        { value: '10' },
        '10'
      ),
      _react2.default.createElement(
        'option',
        { value: '25' },
        '25'
      ),
      _react2.default.createElement(
        'option',
        { value: '50' },
        '50'
      ),
      _react2.default.createElement(
        'option',
        { value: '100' },
        '100'
      )
    ),
    _react2.default.createElement(
      'span',
      null,
      ' entries'
    )
  );
};

DisplayEntries.propTypes = {
  value: _propTypes2.default.number.isRequired,
  handleChange: _propTypes2.default.func.isRequired
};

exports.default = DisplayEntries;