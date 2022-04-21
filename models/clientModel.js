const { Sequelize, DataTypes } = require("sequelize/types");
const sequelize = require("../database/db");

const Client = sequelize.define('Client',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    firstname:{
        type: DataTypes.STRING(75),
        allowNull:false
    }, lastname:{
        type: DataTypes.STRING(75),
        allowNull:false
    },
    email:{
        type: DataTypes.STRING(75),
        allowNull:false
    },
    company:{
        type: DataTypes.INTEGER,
        allowNull:true,
        defaultValue: 1
    },
    position:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    ID:{
        type: DataTypes.STRING(25),
        unique: true,
        allowNull:false
    }
},{
    tableName: 'clients'
});

const Company = sequelize.define('Company',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING(75),
        allowNull:false
    },
    no_employees:{
        type: DataTypes.INTEGER,
    },
    area:{
        type:{
            type: DataTypes.INTEGER,
        }
    }
});

const Area = sequelize.define('Area',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING(75),
        allowNull:false
    }
});

const Position = sequelize.define('Position',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING(75),
        allowNull:false
    }
});


const createTables = async ()=>{
    try {
        await Client.sync();
        await Company.sync();
        await Area.sync();
        await Position.sync();
        
        console.log("The tables was created succesfully");
    } catch (error) {
        console.log(error);
    };
}

createTables();