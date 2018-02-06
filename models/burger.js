const orm = require("../config/orm.js");

var burger = {
    selectAll: function(colsToSearch, valOfCol, cb) {
        orm.selectAll(colsToSearch, valOfCol, cb,function(res) {
            cb(res);
        });
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne(burgerName, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne(objColVals, condition, function(res) {
            cb(res);
        }); 
    }
};

module.exports = burger;