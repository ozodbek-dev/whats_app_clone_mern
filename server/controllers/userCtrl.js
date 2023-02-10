import User from "../models/userModel.js";

export const addUser = async (req, res) => {

    try {
        const exist = await User.findOne({sub: req.body.sub});
        if (exist) {
            res.status(200).json({
                error: "User already exist",
                success: true
            })
            return;
        }
        const newUser = await User.create(req.body);

        res.status(201).json({
            user: newUser,
            success: true,
        })
    } catch (e) {
        return res.status(500).json({success: false, error: e.message})
    }
}

export const getAllUsers = async (req, res) => {

    try {
        const users = await User.find({})
        res.status(200).json({
            users,
            success: true,
        })
    } catch (e) {
        return res.status(500).json({success: false, error: e.message})
    }
}