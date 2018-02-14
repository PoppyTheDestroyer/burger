const orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(cb,function(res) {
            cb(res);
        });
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne(burgerName, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        orm.updateOne(condition, function(res) {
            cb(res);
        }); 
    },
    delete: function(condition, cb){
        orm.delete(condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;