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
exports.dbOperation = void 0;
const mongodb_1 = require("mongodb");
const dbOperation = callback => __awaiter(void 0, void 0, void 0, function* () {
  const client = new mongodb_1.MongoClient(process.env.MONGODB_URI);
  try {
    yield client.connect();
    const dbIns = client.db(process.env.MONGODB_DB_NAME);
    const result = yield callback(dbIns);
    return result;
  } catch (err) {
    throw Error('DB Operation Error');
  } finally {
    yield client.close(true);
  }
});
exports.dbOperation = dbOperation;