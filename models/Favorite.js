const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Favorite extends Model {}


Favorite.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      gem_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'gem',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'favorite'
    }
  );
  
  module.exports = Favorite;