//web.js
/**
 * Created by David Breuer on 08/12/15.
 *
 * @file web.js
 * @description
 *
 */
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));


app.use(express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/app/bower_components'));

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});
