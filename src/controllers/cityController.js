require('module-alias/register')
const client = require('@db/connection');
const query = require('@db/queries');

const listCity = (req, res) => {
    const cityname = req.params.cityname.charAt(0).toUpperCase() + req.params.cityname.slice(1).toLowerCase().trim();
    client.execute(query.listCity, [cityname], (err, result) => {
        if (err) {
            res.status(400).json({ success: false, message: "query error" });
        } else {
            res.status(200).json({ data: result.rows });
        }
    })
}



module.exports = {
    listCity
}