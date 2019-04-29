"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _preact = require("preact");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _default(obj) {
  function preactComponent() {
    _preact.Component.apply(this, arguments); // auto-bind methods to the component


    for (var i in obj) {
      if (i !== "render" && typeof obj[i] === "function") {
        this[i] = obj[i].bind(this);
      }
    }

    if (obj.init) {
      obj.init.call(this);
    }
  }

  preactComponent.prototype = _extends(Object.create(_preact.Component.prototype), obj);
  preactComponent.prototype.constructor = preactComponent;
  return preactComponent;
}