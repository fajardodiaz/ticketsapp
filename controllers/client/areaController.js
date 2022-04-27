const {
    Area
} = require("../../models/clientModel");


// Area Operations

//Get All Areas
exports.getAreas = async (req, res) => {
    try {
        const areas = await Area.findAll({
            order: [["name","ASC"]]
        });
        res.json(areas);
    } catch (error) {
        res.json({
            "message": error
        });
    };
};

//Get an Area By ID
exports.getAreaById = async (req, res) => {
    try {
        const area = await Area.findByPk(req.params.id);
        if (area != null){
            res.json(area);
        }else{
            res.status(404);
            res.json({"message":"Position Not Found"});
        };

    } catch (error) {
        res.json({
            "message": error
        });
    };
};

//Create One/Many Areas
exports.createArea = async (req, res) => {
    try {
        let data = req.body;

        //If data.length > 1 means that we send an array to create many areas in a single post request
        if (data.length > 1) {
            await Area.bulkCreate(data);
            res.json({
                "message": "Areas created succesfully"
            });
        } else {
            await Area.create({
                name: req.body.name
            });
            res.json({
                "message": "Area Created Succesfully"
            });
        };

    } catch (error) {
        res.json({
            "message": error
        });
    };
};


//Update an Area
exports.updateArea = async (req, res) => {
    try {
        const updateArea = await Area.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.id
            }
        });

        res.json({
            "message": "Area updated Succesfully"
        });
    } catch (error) {
        res.json({
            "error": error
        });
    };
};

//Delete an Position
exports.deleteArea = async (req, res) => {
    try {
        const deleteArea = await Area.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Area deleted Succesfully"
        });
    } catch (error) {
        res.json({
            "error": error
        });
    };
};