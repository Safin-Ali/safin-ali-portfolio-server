"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const projects_controller_1 = require("../controllers/projects-controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/all', projects_controller_1.getAllProjects);
router.get('/:id', projects_controller_1.getProject);
exports.default = router;