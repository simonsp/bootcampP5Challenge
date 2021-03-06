'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class BaggageStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BaggageStatus.hasMany(models.Baggage, {
        as: 'baggage',
        foreignKey: 'baggageStatusId',
        target: 'id',
      })
    }
  }
  BaggageStatus.init(
    {
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'BaggageStatus',
    },
  )
  return BaggageStatus
}
