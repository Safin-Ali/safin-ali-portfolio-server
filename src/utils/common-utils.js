"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transport = exports.errRes = exports.routeHandler = void 0;
const nodemailer_1 = require("nodemailer");
const routeHandler = callback => {
  return callback;
};
exports.routeHandler = routeHandler;
const errRes = res => res.status(500).send('Server Side Error');
exports.errRes = errRes;
exports.transport = (0, nodemailer_1.createTransport)({
  service: 'gmail',
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_EMAIL_PASS
  }
});