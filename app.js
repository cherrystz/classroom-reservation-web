const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
// express
const app = express();

app.use(express.static('static'))

// Connect to server
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "classreserve_database"
});


// session **** Ask T.Oak ****
app.use(session({
    secret: "cosci cat",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// client get
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

//admin home
app.get("/admin-home", function (req, res) {
    res.sendFile(path.join(__dirname + "/admin_home.html"));
});

//logout
app.get("/logout", function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/'); //Inside a callback… bulletproof!
    });
});

// client auth login
app.post("/auth", function (req, res) {

    var type_auth = req.query.type;
    var username = req.body.username;
    var password = req.body.password;

    if (username && password) {
        if (type_auth == 'admin') { // admin account
            connection.query(
                "SELECT * FROM administrator WHERE administrator_id = ? AND administrator_passw = ?",
                [username, password],
                function (error, results, fields) {
                    if (results.length > 0) {
                        req.session.loggedin = true;
                        req.session.username = username;
                        res.redirect("/admin-home");
                    }
                    else {
                        res.redirect('/login?type=admin');
                    }
                    res.end();
                }
            )
        }
        else if (type_auth == 'common') { // common account
            connection.query(
                "SELECT * FROM info_employee WHERE employee_id = ? AND employee_passw = ?",
                [username, password],
                function (error, results, fields) {
                    if (results.length > 0) {
                        req.session.loggedin = true;
                        req.session.username = username;
                        res.redirect("/admin-home");
                    }
                    else {
                        res.redirect('/login?valid=incorrect');
                    }
                    res.end();
                }
            )
        }
        else { // case if no type of account
            res.redirect('/login?valid=' + encodeURIComponent('undefined-type'))
        }
    }
    else {
        res.redirect('login')
    }
});


app.listen(3000);
console.log('running on port 3000...')