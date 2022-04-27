const {
    Position
} = require("../../models/clientModel");


// Position Operations
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

exports.createPosition = async (req, res) => {
    try {
        await Position.create({
            name: req.body.name
        });
        res.json({
            "message": "Position Created Succesfully"
        });
    } catch (error) {
        res.json({
            "message": error
        });
    }
}

exports.createManyPositions = async (req, res) => {
    try {
        let data = req.body;
        await Position.bulkCreate(data);
        res.json({"message":"Positions created succesfully"})
    } catch (error) {
        res.json({
            "error": error
        });
    }
}

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