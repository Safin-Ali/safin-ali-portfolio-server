"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const express_1 = __importStar(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const cors_1 = __importDefault(require("cors"));
const projects_router_1 = __importDefault(require("./routes/projects-router"));
const root_controller_1 = require("./controllers/root-controller");
const path_1 = require("path");
const smtp_controller_1 = require("./controllers/smtp-controller");
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.set('views', (0, path_1.resolve)(__dirname, 'template'));
app.set('view engine', 'ejs');
app.use((0, cors_1.default)({
  origin: 'https://safin-ali.vercel.app',
  methods: ['GET', 'POST']
}));
app.use((0, express_1.json)());
app.use('/api/project', projects_router_1.default);
app.get('/api', root_controller_1.rootRouteHandler);
app.post('/api/sendEmail', smtp_controller_1.sendEmail);
app.listen(port, () => {
  console.log(`server run on ${port}`);
});