const User = require('./../models/userModel');
const catchSync = require('./../utils/catchAsync');

exports.signup = catchSync(async (req, res, next) => {
    const newUser = await User.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            user: newUser
        }
    });
});