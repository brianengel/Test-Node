var express = require('express');
var application = express.createServer();

var routing = require('./routing');
var router = new routing.Router(application);
router.registerRoutes();

var configuration = require('./configuration');
var manager = new configuration.ConfigurationManager(application);
var settings = manager.configure();

application.listen(3000);
