'use strict';

// dependencies
var express = require('express'),
    app = express();

var port = process.env.PORT || 3000;
var config = require(__dirname + '/config');


// setting static directory
app.use(express.static(__dirname + '/public'));


// routes
var router = express.Router();
app.use('/api', router);

router.get('/', function(req, res) {
    res.json({ welcome: "to node.js bootstrap API" });
});

// example usage of config file
router.get('/secret', function(req, res) {
    res.json({
        this: config.secret.key,
        is: config.secret.token,
        secret: config.anotherSecret.username
    });
});


app.listen(port, function (){
    console.log('Listening on port: ' + port);
});
