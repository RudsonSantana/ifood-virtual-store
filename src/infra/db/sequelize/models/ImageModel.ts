import { DataTypes } from 'sequelize'
import { sequelize } from './..'

const ImageModel = sequelize.define('images', {
  id: {
    type: DataTypes.STRING(36),
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  path: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
  {
    timestamps: false
  }
)

export { ImageModel }