const sequelize = require("../database/db");

exports.getHome = (req, res, next) => {
    res.json({ "page": 'Home Page' });
};

exports.getDatabaseInfo = async (req, res, next)=>{
    try{
        const resp = await sequelize.authenticate();
        console.log(resp);
        res.json({"message":"Connection established"}); 
    }catch(error){
        res.json({"error":error});
    }
};