import { DataTypes } from 'sequelize'
import { sequelize } from '..'
import { ImageModel } from './ImageModel';

const ProductModel = sequelize.define('products', {
    id: {
        type: DataTypes.STRING(36),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_image: {
        type: DataTypes.STRING(36),
        references: {
            model: 'images',
            key: 'id'
        },
    }
},
    {
        timestamps: false
    }
)

ProductModel.belongsTo(ImageModel, { foreignKey: 'id_image'});

export { ProductModel }