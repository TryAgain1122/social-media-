import userModel from "../models/userModel.js"

//get user
export const getUser = async (req, res) => {
    const { id } = req.params.id

    try {
        const user = await userModel.findById(id);
            const { password, ...otherDetails } = user._doc;

            res.status(200).json({ message: "No user found"})
        if (!user) {

        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//get user 
export const getUserData = async (req, res) => {

    try {
        const user = await userModel.find();

        return res.json({
            user,
        })
    } catch(error) {
        res.status(500).json(error);     
    }
 }