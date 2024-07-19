const Post =require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req,res)=>{
    try{
        //fetch data from req body
        const {post ,user, body}=req.body;

        //create a comment
        const comment = new Comment({
            post,user,body
        });

        //save the comment into the database
        const savedComment = await comment.save();

        
        //find the post by Id , add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments:savedComment._id}},{new:true})
        .populate("comments") //populate the comment array with comment documents
        .exec();
 
        //send a success response with json flag
        res.status(200).json({
            success:true,
            data:updatedPost,
            message:'Entry Created Successfully'
        });

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}