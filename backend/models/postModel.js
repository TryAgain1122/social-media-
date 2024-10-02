import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: {
        desc: String,
        likes: [],
        image: String,
    }
},
    {Timestamp: true}
)

const postModel = mongoose.model("Posts", postSchema);
export default postModel;