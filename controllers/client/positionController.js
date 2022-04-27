const {
    Position
} = require("../../models/clientModel");


// Position Operations

//Get All Positions
exports.getPositions = async (req, res) => {
    try {
        const positions = await Position.findAll();
        res.json(positions);
    } catch (error) {
        res.json({
            "message": error
        });
    }
}

//Get a Position By ID
exports.getPositionById = async (req, res) => {
    try {
        const position = await Position.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(position);

    } catch (error) {
        res.json({
            "message": error
        });
    }
}

//Create One/Many Positions
exports.createPosition = async (req, res) => {
    try {
        let data = req.body;
        console.log(data.length);

        //If data.length > 1 means that we send an array to create many positions in a single post request
        if(data.length > 1){
            await Position.bulkCreate(data);
            res.json({"message":"Positions created succesfully"})
        }else{
            await Position.create({
                name: req.body.name
            });
            res.json({
                "message": "Position Created Succesfully"
            });
        }

    } catch (error) {
        res.json({
            "message": error
        });
    }
}


//Update a Position
exports.updatePosition = async (req, res) => {
    try {
        const updatePos = await Position.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.id
            }
        });

        res.json({
            "message": "Position updated Succesfully"
        });
    } catch (error) {
        console.log(error)
        res.json({
            "error": error
        })
    }
}

//Delete a Position
exports.deletePosition = async (req, res) => {
    try {
        const deletePos = await Position.destroy({ where:{
            id: req.params.id
        }});
        res.json({
            "message": "Position deleted Succesfully"
        });
    } catch (error) {
        res.json({
            "error": error
        })
    }
}