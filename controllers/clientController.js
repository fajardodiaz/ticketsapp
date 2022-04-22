const { Position } = require("../models/clientModel");
/** Client Operations */
exports.getClients = (req, res, next) => {
    res.json({ "page": 'Clients' });
};


// Position Operations
exports.getPositions = async(req, res)=>{
    try {
        const positions = await Position.findAll();
        res.json(positions);
    } catch (error) {
        res.json({"message":error});
    }
}

exports.getPositionById = async(req,res)=>{
    try {
        const position = await Position.findAll({
            where:{
                id: req.params.id
            }
        })
        res.json(position);

    } catch (error) {
        res.json({"message":error});
    }
}

exports.createPosition = async (req, res) =>{
    try{
        await Position.create({name: req.body.name});
        res.json({"message":"Position Created Succesfully"});
    }catch(error){
        res.json({"message":error});
    }
}