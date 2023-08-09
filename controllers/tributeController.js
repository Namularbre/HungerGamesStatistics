const path = require('path');

class TributeController {
    static async getTributes(req, res) {
        res.sendFile(path.resolve(__dirname + '/../views/index.html'));
    }
}

module.exports = TributeController;
