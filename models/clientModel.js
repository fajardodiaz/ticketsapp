const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Area = sequelize.define('Area',{
    name:{
        type: DataTypes.STRING(75),
        allowNull:false
    }
},{
    tableName: 'areas'
});

const Company = sequelize.define('Company',{
    name:{
        type: DataTypes.STRING(75),
        allowNull:false
    },
    no_employees:{
        type: DataTypes.INTEGER,
    },
    area_id:{
        type: DataTypes.INTEGER,
        allowNull:true,
        references:{
            model: Area,
            key:"id",
        }
    }
},{
    tableName: 'companies'
});


const Position = sequelize.define('Position',{
    name:{
        type: DataTypes.STRING(75),
        allowNull:false
    }
},{
    tableName: 'positions'
});


const Client = sequelize.define('Client',{
    firstname:{
        type: DataTypes.STRING(75),
        allowNull:false
    }, lastname:{
        type: DataTypes.STRING(75),
        allowNull:false
    },
    email:{
        type: DataTypes.STRING(75),
        allowNull:false,
        unique:true
    },
    company_id:{
        type: DataTypes.INTEGER,
        allowNull:true,
        references:{
            model: Company,
            key:"id",
        }
    },
    position_id:{
        type: DataTypes.INTEGER,
        allowNull:true,
        references:{
            model: Position,
            key:"id",
        }
    },
    UniqueID:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull:false
    },
},{
    tableName: 'clients'
});

//This method going to create the tables if not exist
// sequelize.sync();


module.exports = {
    Client,
    Company,
    Area,
    Position,
};