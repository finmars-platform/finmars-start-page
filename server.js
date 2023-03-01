/**
 * Created by szhitenev on 01.03.2023.
 */

'use strict';
var express = require('express');
var path = require('path');
var app = express();


const KEYCLOAK_URL = process.env.KEYCLOAK_URL || 'https://dev-auth.finmars.com';
const KEYCLOAK_REALM = process.env.KEYCLOAK_REALM || 'finmars';

app.use(express.static(path.join(__dirname, 'dist')));


app.get('/', function (req, res) {

    return res.sendFile('/index.html', {root: path.join(__dirname, 'dist')});
});

app.get('/config.json', function (req, res) {

    res.send({
        'keycloak': {
            'url': KEYCLOAK_URL, 'realm': KEYCLOAK_REALM
        }
    })

})

app.get('/login', function (req, res) {

    return res.sendFile('/login.html', {root: path.join(__dirname, 'dist')});
});

app.get('/logout', function (req, res) {

    return res.sendFile('/logout.html', {root: path.join(__dirname, 'dist')});
});

app.get('/signup', function (req, res) {

    return res.sendFile('/signup.html', {root: path.join(__dirname, 'dist')});
});


app.listen(8080, '0.0.0.0', function () {
    console.info('Express server start at 8080 port');
});
