const jwt = require("jsonwebtoken");

const SECRET_KEY = "product-crud"

const authuser = async(req, res, next) => {
    try {
        const usertoken = await req.header("auth-token")
        if(usertoken){
            const userinfo = await jwt.verify(usertoken, SECRET_KEY)
            console.log(userinfo)
            req.userid = userinfo
            next()
        }else{
            res.json({success: false, message: "Unauthorized user token"})
        }
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Server error -Invalid token"})  
    }
}

module.exports = authuser