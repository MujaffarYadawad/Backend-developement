const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Mujaffar@MH2007', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
