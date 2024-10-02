
//Create new Post 

import postModel from "../models/postModel.js"

export const createPost = async (req, res) => {

    const newPost = new postModel(req.body);

    try {
        await newPost.save();
        res.status(200).json("Post Created");
    } catch(error)  {
        res.status(200).json(error)
    }
}   

//Geta a post 
export const getPost = async (req, res) => {
    const id = req.params.id;

    try {
        const post = await postModel.findById(id);
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Update Post
export const updatePost = async (req, res) => {
    const postId = req.params.id;
    const { userId } = req.body;

    try {
        const post = await postModel.findById(postId);

        if (post.userId === userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("Post Updated")
        } else {
            res.status(403).json("Action forbidden")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

//Delete a post
export const deletePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;

    try {
        const post = await postModel.findById(id);
        if (post.userId === userId) {
            await post.deleteOne();
            res.status(200).json("Post deleted successfully");
        } else {
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }

}