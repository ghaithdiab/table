"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeText = exports.generateID = void 0;

// Generate a random ID
var generateID = function generateID() {
  return "_" + Math.random().toString(36).substring(2, 9);
};

exports.generateID = generateID;

var normalizeText = function normalizeText(text) {
  return text.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
};

exports.normalizeText = normalizeText;