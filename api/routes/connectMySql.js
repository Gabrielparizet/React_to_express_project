const express = require ('express');
const router = express.Router();
const { Sequelize } = require ('sequelize');
require('dotenv').config();
console.log(process.env);

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: 'mysql', host: 'localhost'
  });

router.get('/', function(req, res, next) {
    try {
        let sql = "SELECT * FROM furnitures"
        sequelize.query(sql)
        .then(([result]) => {
              console.log(result)
              res.send(result)})
    } catch (error) {  console.error('Impossible de se connecter, erreur suivante :', error); }
});

module.exports = router;