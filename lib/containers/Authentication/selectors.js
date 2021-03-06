"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectAuthenticationState = exports.selectAuthenticationDomain = void 0;

var _reselect = require("reselect");

var _commonConstants = require("../../utils/commonReduxSagaConverter/commonConstants");

var _helpers = require("../../utils/helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var selectAuthenticationDomain = function selectAuthenticationDomain(initialState, generatorKey) {
  return function (state) {
    return state[generatorKey] || initialState;
  };
};

exports.selectAuthenticationDomain = selectAuthenticationDomain;

var makeSelectAuthenticationState = function makeSelectAuthenticationState(_ref) {
  var apiEndPoints = _ref.apiEndPoints,
      initialState = _ref.initialState,
      InitialState = _ref.InitialState,
      generatorKey = _ref.generatorKey,
      constants = _ref.constants;
  return function () {
    return (0, _reselect.createSelector)(selectAuthenticationDomain(initialState, generatorKey), function (substate) {
      return (0, _helpers.newObject)(Object.keys(InitialState).reduce(function (acc, key) {
        return _objectSpread({}, acc, _defineProperty({}, key, substate[key]));
      }, {}), Object.keys(apiEndPoints[generatorKey]).reduce(function (acc, key) {
        return _objectSpread({}, acc, _defineProperty({}, key, substate[constants[key][_commonConstants.CALL]]));
      }, {}));
    });
  };
};

exports.makeSelectAuthenticationState = makeSelectAuthenticationState;