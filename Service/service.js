const { connection } = require("../Configuration/dbConnection");
const constant = require("./../Configuration/constants.json");

const getProductDetails = (req, res) => {
    if(req.query && ['FEATURED', 'RATED'].indexOf(req.query.type) !== -1) {
        connection.query(constant.QUERY.POST_LOGIN.GET_HOME_PRODUCTS, [req.query.type], (err, result) => {
            if(!err) {
                res.status(200).send({
                    message: constant.MESSAGE.SUCCESS.DATA_FETCHED,
                    data: result
                })
            } else {
                res.status(400).send({
                    message: constant.MESSAGE.ERROR.DB_ERROR,
                    data: []
                })
            }
        });
    } else {
        res.status(400).send({
            message: constant.MESSAGE.ERROR.INVALID
        })
    }
}


module.exports = { getProductDetails };