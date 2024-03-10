"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = void 0;
const ejs_1 = require("ejs");
const path_1 = require("path");
const fs_1 = require("fs");
const common_utils_1 = require("../utils/common-utils");
exports.sendEmail = (0, common_utils_1.routeHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
  const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateObj = new Date();
  const {
    emailDesc,
    emailSub,
    senderEmail,
    senderLocation,
    senderName
  } = req.body;
  const ISODate = `${monthsShort[dateObj.getMonth()]} ${dateObj.getDate()} ${dateObj.getFullYear()}`;
  try {
    const emailHtml = (0, fs_1.readFileSync)((0, path_1.resolve)(__dirname, '..', 'template', 'email-template.ejs'), 'utf-8');
    yield common_utils_1.transport.sendMail({
      from: `'${senderName}' <${senderEmail}>`,
      to: 'safin.ali.7205@gmail.com',
      subject: `Email from Safin-Ali Portfolio`,
      html: (0, ejs_1.render)(emailHtml, {
        date: ISODate,
        senderEmail,
        emailDesc,
        emailSub,
        senderName,
        senderLocation
      })
    });
    res.status(200).json('success');
  } catch (e) {
    console.log(e.message);
    res.status(500).json('server side error');
  }
}));