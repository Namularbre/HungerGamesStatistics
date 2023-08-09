const TributesModel = require('../models/tributesModel');

class ApiTributesController {
    static async postTribute(req, res) {
        const name = req.body.name;

        try {
            const rows = await TributesModel.insertTribute(name);
            console.log(rows);
        } catch (error) {
            console.error(error.message);
            res.status(500);
        }
    }

    static async getTributes(req, res) {
        try {
            const tributes = await TributesModel.selectTributes();

            res.send(tributes);
        } catch (error) {
            console.error(error.message);
            res.status(500);
        }
    }

    static async getTribute(req, res) {
        const name = req.query.name;

        try {
            const rows = await TributesModel.selectTribute(name);

            if (rows[0]) {
                res.send(rows[0]);
            } else {
                res.status(404).send(null);
            }
        } catch (error) {
            console.error(error.message);
            res.status(500);
        }
    }

    static async removeTribute(req, res) {
        const name = req.body.name;

        try {
            const rows = await TributesModel.deleteTribute(name);
            console.log(rows);
        } catch (error) {
            console.error(error.message);
            res.status(500);
        }
    }
}

module.exports = ApiTributesController;
