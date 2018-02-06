const connection = require("./connection.js");

function addQuestionMarks(num) {
    var arr = [];
    for(var i = 0; i<num; i+=1) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value ="'" + value + "'";
            }
            arr.push(`${key} = ${value}`);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, res) {
            if(err) throw err;
            console.log(res);
            console.log("crap");
            cb(res);
            return res;
            
        });
    },
    insertOne: function(burgerName, cb) {
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (??, false);`;
        connection.query(queryString, [burgerName], function (err, res) {
            if(err) throw err;
            console.log(res);
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        var queryString = `UPDATE burgers SET ${objToSql(objColVals)} WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;