"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _queryString = _interopRequireDefault(require("query-string"));

var _effects = require("redux-saga/effects");

var constants = _interopRequireWildcard(require("./commonConstants"));

var _index = require("../index");

var _axios = _interopRequireDefault(require("../../config/axios"));

var commonActions = _interopRequireWildcard(require("./commonActions"));

var _customError = _interopRequireDefault(require("../customError"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(loaderGenerator);

var headers = '';

function loaderGenerator(_ref) {
  var type, commonData;
  return regeneratorRuntime.wrap(function loaderGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = _ref.type, commonData = _ref.commonData;
          _context.next = 3;
          return (0, _effects.put)(commonActions.apiLoadingStatus({
            type: type,
            payload: commonData,
            status: false
          }));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function _default(_ref2) {
  var _marked2 = /*#__PURE__*/regeneratorRuntime.mark(commonGenerator);

  var _ref2$actionType = _ref2.actionType,
      actionType = _ref2$actionType === void 0 ? {} : _ref2$actionType,
      requestResponseHandler = _ref2.requestResponseHandler,
      axiosInterceptors = _ref2.axiosInterceptors;

  function commonGenerator(_ref3) {
    var _ref3$payload, _ref3$payload$request, _ref3$payload$request2, payload, params, query, _ref3$payload$request3, paramsSerializer, _ref3$payload$request4, axiosConfig, rest, _ref3$payload$callbac, successCallback, errorCallback, logoutCallback, finalCallback, restCallback, restPayload, type, axios, CancelToken, source, action, commonData, actionBind, request, requestData, _yield$race, postData, cancelTask, data, statusKey, _ref4, _ref4$data, _ref4$data$status, successStatus, _ref4$data$message, successMessage, loader, _ref5, customMethod, _ref6, _ref6$response, _ref6$response$data, _ref6$response$data2, errorData, errorStatus, _ref6$response$data$m, errorMessage, _loader, Cancelled;

    return regeneratorRuntime.wrap(function commonGenerator$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref3$payload = _ref3.payload, _ref3$payload$request = _ref3$payload.request;
            _ref3$payload$request = _ref3$payload$request === void 0 ? {} : _ref3$payload$request;
            _ref3$payload$request2 = _ref3$payload$request.payload, payload = _ref3$payload$request2 === void 0 ? {} : _ref3$payload$request2, params = _ref3$payload$request.params, query = _ref3$payload$request.query, _ref3$payload$request3 = _ref3$payload$request.paramsSerializer, paramsSerializer = _ref3$payload$request3 === void 0 ? {
              arrayFormat: 'brackets'
            } : _ref3$payload$request3, _ref3$payload$request4 = _ref3$payload$request.axiosConfig, axiosConfig = _ref3$payload$request4 === void 0 ? {} : _ref3$payload$request4, rest = _objectWithoutProperties(_ref3$payload$request, ["payload", "params", "query", "paramsSerializer", "axiosConfig"]), _ref3$payload$callbac = _ref3$payload.callback;
            _ref3$payload$callbac = _ref3$payload$callbac === void 0 ? {} : _ref3$payload$callbac;
            successCallback = _ref3$payload$callbac.successCallback, errorCallback = _ref3$payload$callbac.errorCallback, logoutCallback = _ref3$payload$callbac.logoutCallback, finalCallback = _ref3$payload$callbac.finalCallback, restCallback = _objectWithoutProperties(_ref3$payload$callbac, ["successCallback", "errorCallback", "logoutCallback", "finalCallback"]), restPayload = _objectWithoutProperties(_ref3$payload, ["request", "callback"]), type = _ref3.type;
            axios = axiosInterceptors || _axios.default;
            CancelToken = axios.CancelToken;
            _context2.next = 9;
            return CancelToken.source();

          case 9:
            source = _context2.sent;
            _context2.next = 12;
            return actionType[type];

          case 12:
            action = _context2.sent;
            _context2.next = 15;
            return action = _objectSpread({}, action, {
              error: action.error || action.actions[constants.ERROR],
              success: action.success || action.actions[constants.SUCCESS],
              customTask: action.custom || action.actions[constants.CUSTOM]
            });

          case 15:
            commonData = _objectSpread({
              payload: payload,
              params: params,
              query: query
            }, rest, {
              request: _objectSpread({
                payload: payload,
                params: params,
                query: query
              }, rest),
              callback: restCallback
            }, restPayload);

            actionBind = function actionBind(_action, _method) {
              return _action.bind({}, type, _method, commonData);
            };

            if (!(typeof action.error === 'function')) {
              _context2.next = 22;
              break;
            }

            _context2.next = 20;
            return actionBind(action.error, constants.ON_ERROR);

          case 20:
            _context2.next = 22;
            return action.error = _context2.sent;

          case 22:
            if (!(typeof action.success === 'function')) {
              _context2.next = 27;
              break;
            }

            _context2.next = 25;
            return actionBind(action.success, constants.ON_SUCCESS);

          case 25:
            _context2.next = 27;
            return action.success = _context2.sent;

          case 27:
            _context2.next = 29;
            return _objectSpread({}, action.api || {}, {
              cancelToken: source.token,
              url: action.api.url,
              method: action.api.method || 'GET',
              data: payload,
              headers: headers
            });

          case 29:
            request = _context2.sent;

            if (!action.effect) {
              _context2.next = 33;
              break;
            }

            _context2.next = 33;
            return delete action.effect;

          case 33:
            if (!action.actions) {
              _context2.next = 36;
              break;
            }

            _context2.next = 36;
            return delete action.actions;

          case 36:
            if (!(params && typeof request.url === 'function')) {
              _context2.next = 40;
              break;
            }

            _context2.next = 39;
            return request.url(params);

          case 39:
            request.url = _context2.sent;

          case 40:
            if (query) {
              request.params = query;

              request.paramsSerializer = function (param) {
                return _queryString.default.stringify(param, paramsSerializer);
              };
            }

            if (!(process.env.NODE_ENV !== 'test' || !action.test)) {
              _context2.next = 44;
              break;
            }

            _context2.next = 44;
            return delete request.headers;

          case 44:
            _context2.next = 46;
            return (0, _effects.call)(requestResponseHandler, {
              type: type,
              action: action,
              request: request,
              payload: commonData,
              actionData: rest,
              method: constants.ON_REQUEST
            });

          case 46:
            requestData = _context2.sent;
            _context2.next = 49;
            return request = requestData || request;

          case 49:
            if (['POST', 'PATCH', 'PUT', 'DELETE'].includes(request.method)) {
              _context2.next = 52;
              break;
            }

            _context2.next = 52;
            return delete request.data;

          case 52:
            if (request.effect) delete request.effect;
            _context2.prev = 53;
            _context2.next = 56;
            return (0, _effects.race)({
              posts: (0, _effects.call)(axios, _objectSpread({}, request, {}, axiosConfig)),
              cancel: (0, _effects.take)(action.cancel)
            });

          case 56:
            _yield$race = _context2.sent;
            postData = _yield$race.posts;
            cancelTask = _yield$race.cancel;
            data = postData;

            if (!(postData && postData.data)) {
              _context2.next = 65;
              break;
            }

            statusKey = action.api.responseStatusCodeKey || 'status';
            data = {
              data: {
                status: ((action.api.responseStatusCode || []).includes((postData.data || {})[statusKey]) ? 200 : (postData.data || {})[statusKey]) || (postData.data || {}).status || postData.status,
                message: (postData.data || {})[action.api.responseMessageKey || 'message'],
                data: (postData.data || {})[action.api.responseDataKey] || postData.data
              }
            };

            if (!(action.api.errorHandlerStatusCode && (action.api.errorHandlerStatusCode || []).includes(data.data.status))) {
              _context2.next = 65;
              break;
            }

            throw new _customError.default({
              response: {
                data: {
                  error: (postData.data || {})[action.api.errorDataKey || 'error'] || postData.data,
                  status: data.data.status,
                  message: data.data.message
                }
              }
            });

          case 65:
            if (!data) {
              _context2.next = 81;
              break;
            }

            _ref4 = data || {}, _ref4$data = _ref4.data;
            _ref4$data = _ref4$data === void 0 ? {} : _ref4$data;
            _ref4$data$status = _ref4$data.status, successStatus = _ref4$data$status === void 0 ? postData.status : _ref4$data$status, _ref4$data$message = _ref4$data.message, successMessage = _ref4$data$message === void 0 ? '' : _ref4$data$message;
            _context2.next = 71;
            return action.success = action.success.bind({}, successStatus, successMessage);

          case 71:
            _context2.next = 73;
            return (0, _effects.call)(requestResponseHandler, {
              data: data,
              type: type,
              action: action,
              payload: commonData,
              actionData: rest,
              method: constants.ON_SUCCESS
            });

          case 73:
            loader = _context2.sent;

            if (!loader) {
              _context2.next = 77;
              break;
            }

            _context2.next = 77;
            return (0, _effects.call)(loaderGenerator, {
              type: type,
              commonData: commonData
            });

          case 77:
            if (typeof successCallback === 'function') successCallback({
              res: data,
              data: data.data,
              message: successMessage,
              status: successStatus
            });
            if (typeof logoutCallback === 'function') setTimeout(function () {
              return logoutCallback(data);
            }, 500);
            _context2.next = 99;
            break;

          case 81:
            if (!(cancelTask && typeof source.cancel === 'function')) {
              _context2.next = 92;
              break;
            }

            _context2.next = 84;
            return source.cancel();

          case 84:
            _ref5 = cancelTask || {}, customMethod = _ref5.response.method;

            if (customMethod) {
              _context2.next = 88;
              break;
            }

            _context2.next = 88;
            return (0, _effects.call)(requestResponseHandler, {
              type: type,
              action: action,
              payload: commonData,
              actionData: rest,
              method: constants.ON_CANCEL,
              axiosCancel: cancelTask
            });

          case 88:
            _context2.next = 90;
            return (0, _effects.call)(loaderGenerator, {
              type: type,
              commonData: commonData
            });

          case 90:
            _context2.next = 99;
            break;

          case 92:
            if (!(process.env.NODE_ENV === 'test' && action.success)) {
              _context2.next = 97;
              break;
            }

            _context2.next = 95;
            return (0, _effects.put)(action.success({
              data: data
            }));

          case 95:
            _context2.next = 99;
            break;

          case 97:
            _context2.next = 99;
            return (0, _effects.call)(loaderGenerator, {
              type: type,
              commonData: commonData
            });

          case 99:
            _context2.next = 126;
            break;

          case 101:
            _context2.prev = 101;
            _context2.t0 = _context2["catch"](53);
            console.error(_context2.t0);
            if (process.env.NODE_ENV === 'test') console.error(_context2.t0);
            _ref6 = _context2.t0 || {}, _ref6$response = _ref6.response;
            _ref6$response = _ref6$response === void 0 ? {} : _ref6$response;
            _ref6$response$data = _ref6$response.data;
            _ref6$response$data = _ref6$response$data === void 0 ? {} : _ref6$response$data;
            _ref6$response$data2 = _ref6$response$data[action.api.errorDataKey || 'error'], errorData = _ref6$response$data2 === void 0 ? _context2.t0 && _context2.t0.response && _context2.t0.response.data || '' : _ref6$response$data2, errorStatus = _ref6$response$data.status, _ref6$response$data$m = _ref6$response$data.message, errorMessage = _ref6$response$data$m === void 0 ? _context2.t0.response && _context2.t0.response && _context2.t0.response[action.api.errorMessageKey] || [] : _ref6$response$data$m;
            if (typeof errorCallback === 'function') errorCallback({
              error: _context2.t0,
              errorData: (0, _index.responseErrorParser)(errorData),
              message: errorMessage,
              status: errorStatus,
              errors: errorData
            });
            _context2.next = 113;
            return action.error = action.error.bind({}, errorStatus, errorMessage);

          case 113:
            if (!(axios.isCancel(_context2.t0) && action.cancel)) {
              _context2.next = 120;
              break;
            }

            _context2.next = 116;
            return (0, _effects.call)(loaderGenerator, {
              type: type,
              commonData: commonData
            });

          case 116:
            _context2.next = 118;
            return (0, _effects.call)(requestResponseHandler, {
              type: type,
              action: action,
              payload: commonData,
              actionData: rest,
              method: constants.ON_CANCEL_ERROR
            });

          case 118:
            _context2.next = 126;
            break;

          case 120:
            _context2.next = 122;
            return (0, _effects.call)(requestResponseHandler, {
              error: _context2.t0,
              type: type,
              action: action,
              payload: commonData,
              actionData: rest,
              method: constants.ON_ERROR
            });

          case 122:
            _loader = _context2.sent;

            if (!_loader) {
              _context2.next = 126;
              break;
            }

            _context2.next = 126;
            return (0, _effects.call)(loaderGenerator, {
              type: type,
              commonData: commonData
            });

          case 126:
            _context2.prev = 126;
            _context2.next = 129;
            return (0, _effects.cancelled)();

          case 129:
            Cancelled = _context2.sent;
            if (typeof finalCallback === 'function') finalCallback({
              type: type,
              action: action,
              payload: commonData,
              Cancelled: Cancelled
            });
            _context2.next = 133;
            return (0, _effects.call)(requestResponseHandler, {
              type: type,
              action: action,
              payload: commonData,
              actionData: rest,
              method: constants.ON_FINALLY,
              cancelled: Cancelled
            });

          case 133:
            if (!Cancelled) {
              _context2.next = 137;
              break;
            }

            if (!(typeof source.cancel === 'function')) {
              _context2.next = 137;
              break;
            }

            _context2.next = 137;
            return source.cancel();

          case 137:
            return _context2.finish(126);

          case 138:
          case "end":
            return _context2.stop();
        }
      }
    }, _marked2, null, [[53, 101, 126, 138]]);
  }

  var generatorPattern = Object.keys(actionType).map(function (pattern) {
    return (actionType[pattern].effect || _effects.takeLatest)(pattern, commonGenerator);
  });
  return [generatorPattern, commonGenerator];
}