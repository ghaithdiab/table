"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

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

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dtb-search"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "dtb-search"
  }, "Search: "), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "dtb-search",
    name: "dtb-search",
    onChange: function onChange(evt) {
      return handleSearch(evt);
    }
  }));
};

Search.propTypes = {
  data: _propTypes.default.array.isRequired,
  handleDisplayedData: _propTypes.default.func.isRequired,
  handleIsSearching: _propTypes.default.func.isRequired
};
var _default = Search;
exports.default = _default;