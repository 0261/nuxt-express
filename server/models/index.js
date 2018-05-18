"use strict";
require('debugs/init');
const debug = require('debug')('auth');
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require('../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.user, config.password, config);
const db = {};
// Sequelize Model
fs.readdirSync(__dirname)
    .filter(function (file) {
        // # 인덱스 파일 제외한 나머지 모델 다 불러오기.
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;