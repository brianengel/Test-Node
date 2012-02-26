function ConfigurationManager(application) {

    var express = require('express');

    function global() {
        application.use(express.bodyParser());
        application.use(express.methodOverride());
        application.set('view engine', 'jade'); 
    }
    
    function development() {
        console.log("Running development...");
        application.use(express.static(__dirname + '/public'));
        application.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
    }
    
    function production() {
        console.log("Running development...");
        application.use(express.static(__dirname + '/public'));
        application.use(express.errorHandler());
    }

    this.configure = function() {
        application.configure(global);
        application.configure('development', development);
        application.configure('production', production);
    }
}


exports.ConfigurationManager = ConfigurationManager;
