//import the model
const Post = require("../models/postModel");

//define route handler
exports.createPost = async(req,res)=>{
    try{
        //extract title and description from request body
        const {title,body}=req.body;
        //create a new Todo obj and insert in db
        const response = await Post.create({title,body});
        //or use save() function

        //send a success response with json flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry Created Successfully'
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(400)
        .json({
            success:false,
            data:"Error while creating Post",
            message:err.message,
        })
    }
}

//getAllPost
//define route handler
exports.getAllPost = async(req,res)=>{
    try{
        //create a new Todo obj and insert in db
        const posts = await Post.find().populate("likes").populate("comments").exec();

        //send a success response with json flag
        res.status(200).json({
            success:true,
            data:posts,
            message:'Entry Created Successfully'
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(404)
        .json({
            success:false,
            data:"Error while fetching Data",
            message:err.message,
        })
    }
}

// --------------------------------------------------------
// Update Post
exports.updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, body } = req.body;
        const post = await Post.findByIdAndUpdate(id, { title, body }, { new: true }).exec();
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        res.status(200).json({
            success: true,
            data: post,
            message: 'Post updated successfully',
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
};

// -----------------------------------------------------------------
// Delete Post
exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndDelete(id).exec();
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Post deleted successfully',
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
};