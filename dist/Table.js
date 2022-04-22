'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { generateID } from './utils'
var Table = function Table(_ref) {
  var labels = _ref.labels,
      data = _ref.data,
      minShow = _ref.minShow,
      maxShow = _ref.maxShow,
      handleSort = _ref.handleSort,
      sort = _ref.sort,
      sortedData = _ref.sortedData;
  var column = sort.column,
      isDesc = sort.isDesc;

  return _react2.default.createElement(
    'table',
    { className: 'dtb-table' },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        { className: 'dtb-table-header-row' },
        labels.map(function (label) {
          return _react2.default.createElement(
            'th',
            { key: "_" + Math.random().toString(36).substring(2, 9), className: 'dtb-tabel-header-cell', onClick: function onClick() {
                return handleSort(label.value);
              } },
            _react2.default.createElement(
              'div',
              { className: 'dtb-tabel-header-cell-content' },
              _react2.default.createElement(
                'span',
                null,
                label.text
              ),
              _react2.default.createElement(
                'div',
                { className: 'dtb-tabel-header-cell-icons' },
                _react2.default.createElement('div', { className: column === label.value ? !isDesc ? 'dtb-tabel-arrow-up active' : 'dtb-table-arrow-up inactive' : 'dtb-tabel-arrow-up' }),
                _react2.default.createElement('div', { className: column === label.value ? !isDesc ? 'dtb-tabel-arrow-down active' : 'dtb-table-arrow-down inactive' : 'dtb-tabel-arrow-down' })
              )
            )
          )
          // onClick={()=>hanleSort(label.value)}
          ;
        })
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      sortedData.length === 0 && _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'dtb-tabel-row-nomatch', colSpan: labels.length },
          'No matching record found'
        )
      ),
      data.map(function (elt, index) {
        if (index + 1 >= minShow && index < maxShow) {
          return _react2.default.createElement(
            'tr',
            { key: "_" + Math.random().toString(36).substring(2, 9), className: 'dtb-tabel-row' },
            Object.values(elt).map(function (value, j) {
              return _react2.default.createElement(
                'td',
                { key: "_" + Math.random().toString(36).substring(2, 9), className: j === 0 ? 'dtb-tabel-cell first-cell' : 'dtb-tabel-cell' },
                value
              );
            })
          );
        }
        return null;
      })
    )
  );
};
Table.propTypes = {
  labels: _propTypes2.default.array.isRequired,
  data: _propTypes2.default.array.isRequired,
  sortedData: _propTypes2.default.array.isRequired,
  sort: _propTypes2.default.object.isRequired,
  minShow: _propTypes2.default.number.isRequired,
  maxShow: _propTypes2.default.number.isRequired,
  handleSort: _propTypes2.default.func.isRequired
};

exports.default = Table;