const con = require("./connectMysql")

const home = (req,res) =>{

   res.status(200).json({test:"run"})
 
}

module.exports.home = home