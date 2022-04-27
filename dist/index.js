"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _DisplayEntries = _interopRequireDefault(require("./DisplayEntries"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _Search = _interopRequireDefault(require("./Search"));

var _ShowingEntries = _interopRequireDefault(require("./ShowingEntries"));

var _Table = _interopRequireDefault(require("./Table"));

require("./index.css");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @param {object} labels
 * @param {object} data
 */
var DataTable = function DataTable(_ref) {
  var labels = _ref.labels,
      data = _ref.data;

  var _useState = (0, _react.useState)(data),
      _useState2 = _slicedToArray(_useState, 2),
      sortedData = _useState2[0],
      setSortedData = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = (0, _react.useState)(10),
      _useState6 = _slicedToArray(_useState5, 2),
      entriesShown = _useState6[0],
      setEntriesShown = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isSearching = _useState8[0],
      setIsSearching = _useState8[1];

  var _useState9 = (0, _react.useState)({
    column: '',
    isDesc: true
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      sort = _useState10[0],
      setSort = _useState10[1];

  var minShow = currentPage === 1 ? 1 : (currentPage - 1) * entriesShown + 1;
  var maxShow = currentPage * entriesShown < data.length ? currentPage * entriesShown : data.length;
  var minFilteredShow = currentPage === 1 ? sortedData.length > 0 ? 1 : 0 : (currentPage - 1) * entriesShown + 1;
  var maxfilterdShow = currentPage * entriesShown < sortedData.length ? currentPage * entriesShown : sortedData.length; // Handle the changes of displayed entries

  var handleEntriesChange = function handleEntriesChange(evt) {
    setEntriesShown(parseInt(evt.target.value));
    setCurrentPage(1);
  }; //Handel the sorting Data (column+asc/desc)


  var handleSort = function handleSort(label) {
    if (sort.column === label) {
      setSort(_objectSpread(_objectSpread({}, sort), {}, {
        isDesc: !sort.isDesc
      }));
    } else {
      setSort({
        column: label,
        isDesc: false
      });
    }

    var sorted = sorting(label);
    setSortedData(sorted);
  }; // Sorting system based on label


  var sorting = function sorting(label) {
    var sorted = sortedData.sort(function (a, b) {
      var labelA = (0, _utils.normalizeText)(a[label]);
      var labelB = (0, _utils.normalizeText)(b[label]);

      if (sort.isDesc) {
        if (labelA < labelB) return -1;
        if (labelA > labelB) return 1;
      } else {
        if (labelA < labelB) return 1;
        if (labelA > labelB) return -1;
      }

      return 0;
    });
    return sorted;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "data-table"
  }, /*#__PURE__*/_react.default.createElement(_DisplayEntries.default, {
    value: entriesShown,
    handleChange: handleEntriesChange
  }), /*#__PURE__*/_react.default.createElement(_Search.default, {
    data: data,
    handleDisplayedData: setSortedData,
    handleIsSearching: setIsSearching
  }), /*#__PURE__*/_react.default.createElement(_Table.default, {
    labels: labels,
    data: sortedData,
    minShow: minShow,
    maxShow: maxShow,
    handleSort: handleSort,
    sort: sort,
    sortedData: sortedData
  }), /*#__PURE__*/_react.default.createElement(_ShowingEntries.default, {
    minShow: minShow,
    maxShow: maxShow,
    totalEntries: data.length,
    isSearching: isSearching,
    minFiltredShow: minFilteredShow,
    maxFilteredShow: maxfilterdShow,
    totalEntriesShow: sortedData.length
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    totalEntries: sortedData.length,
    displayedEntries: entriesShown,
    handleClick: setCurrentPage,
    currentPage: currentPage
  }));
};

var _default = DataTable;
exports.default = _default;