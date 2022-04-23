"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
  return /*#__PURE__*/_react.default.createElement("table", {
    className: "dtb-table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    className: "dtb-table-header-row"
  }, labels.map(function (label) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: "_" + Math.random().toString(36).substring(2, 9),
      className: "dtb-tabel-header-cell",
      onClick: function onClick() {
        return handleSort(label.value);
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dtb-tabel-header-cell-content"
    }, /*#__PURE__*/_react.default.createElement("span", null, label.text), /*#__PURE__*/_react.default.createElement("div", {
      className: "dtb-tabel-header-cell-icons"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: column === label.value ? !isDesc ? 'dtb-tabel-arrow-up active' : 'dtb-table-arrow-up inactive' : 'dtb-tabel-arrow-up'
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: column === label.value ? !isDesc ? 'dtb-tabel-arrow-down active' : 'dtb-table-arrow-down inactive' : 'dtb-tabel-arrow-down'
    })))) // onClick={()=>hanleSort(label.value)}
    ;
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, sortedData.length === 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: "dtb-tabel-row-nomatch",
    colSpan: labels.length
  }, "No matching record found")), data.map(function (elt, index) {
    if (index + 1 >= minShow && index < maxShow) {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: "_" + Math.random().toString(36).substring(2, 9),
        className: "dtb-tabel-row"
      }, Object.values(elt).map(function (value, j) {
        return /*#__PURE__*/_react.default.createElement("td", {
          key: "_" + Math.random().toString(36).substring(2, 9),
          className: j === 0 ? 'dtb-tabel-cell first-cell' : 'dtb-tabel-cell'
        }, value);
      }));
    }

    return null;
  })));
};

Table.propTypes = {
  labels: _propTypes.default.array.isRequired,
  data: _propTypes.default.array.isRequired,
  sortedData: _propTypes.default.array.isRequired,
  sort: _propTypes.default.object.isRequired,
  minShow: _propTypes.default.number.isRequired,
  maxShow: _propTypes.default.number.isRequired,
  handleSort: _propTypes.default.func.isRequired
};
var _default = Table;
exports.default = _default;