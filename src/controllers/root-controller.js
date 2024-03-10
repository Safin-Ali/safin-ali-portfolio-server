"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootRouteHandler = void 0;
const common_utils_1 = require("../utils/common-utils");
exports.rootRouteHandler = (0, common_utils_1.routeHandler)((_, res) => {
  res.render('root-page');
});