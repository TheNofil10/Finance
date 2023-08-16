const User = require('../models/user')


const test = (req, res) => {
    res.json('test is working')
}

//Login endpoint
const loginUser = async (req, res) => {
    try {
        const {username, password} = req.body;

        //check if user exists
        const user = await User.findOne({username});
        if(!user) {
            return res.json({
                error: 'No user found'
            })
        }

        //check passwords
        if(password == user.password){
            res.json('Passwords Match')
        } else {
            res.json({
                error: 'Incorrect Password'
            })
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    test,
    loginUser
}