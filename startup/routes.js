const express = require("express");
const bodyParser = require("body-parser");
const authClass = require("../middleware/auth");
const protect = require("../routes/auth");
const error = require("../middleware/error");
module.exports = function (app) {
  const auth = authClass();
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(auth.initialize());
  app.use("/auth", protect);
  app.use("/mobile/data", mobile);
  app.use("/customers", customer);
  app.use("/delivery", delivery);
  app.use(error);
};
