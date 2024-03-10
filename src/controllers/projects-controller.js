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
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProject = exports.getAllProjects = void 0;
const db_1 = require("../db/db");
const common_utils_1 = require("../utils/common-utils");
const mongodb_1 = require("mongodb");
exports.getAllProjects = (0, common_utils_1.routeHandler)((_, res) => __awaiter(void 0, void 0, void 0, function* () {
  try {
    const data = yield (0, db_1.dbOperation)(db => __awaiter(void 0, void 0, void 0, function* () {
      const result = yield db.collection('projects').find().toArray();
      return result;
    }));
    const modifiedShort = data.map(prop => {
      const {
          projectCategory,
          projectOthersInfo,
          projectTech,
          projectUsedLib
        } = prop,
        shorted = __rest(prop, ["projectCategory", "projectOthersInfo", "projectTech", "projectUsedLib"]);
      return shorted;
    });
    res.send(modifiedShort);
  } catch (err) {
    console.log(err.message);
    (0, common_utils_1.errRes)(res);
  }
}));
exports.getProject = (0, common_utils_1.routeHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
  try {
    const data = yield (0, db_1.dbOperation)(db => __awaiter(void 0, void 0, void 0, function* () {
      const result = yield db.collection('projects').findOne({
        _id: new mongodb_1.ObjectId(req.params.id)
      });
      return result;
    }));
    res.send(data);
  } catch (err) {
    console.log(err.message);
    (0, common_utils_1.errRes)(res);
  }
}));