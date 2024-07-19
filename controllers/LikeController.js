const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req,res)=>{
   try{
    const {post,user} = req.body();
    const like = new Like({
        post,user,
    })
    const savedLike = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(post,{$push:savedLike._id},{new:true})
    .populate("likes").exec();

    res.json({
        post:updatedPost,
    })
   }
   catch(err){
    console.error(err);
    console.log(err);
    res.status(400)
    .json({
        success:false,
        data:"Error while liking post",
        message:err.message,
    })
   }
}

exports.unlikePost = async (req,res)=>{
    try{
     const {post,like} = req.body();
 
     const deletedLike = await Like.findOneAndUpdate({post:post,_id:like});

     //update the post collection
     const updatedPost = await Post.findByIdAndDelete(post, {$pull:{likes:deletedLike._id}},{new:true})

     
     res.json({
         post:updatedPost,
     })
    }
    catch(err){
     console.error(err);
     console.log(err);
     res.status(400)
     .json({
         success:false,
         data:"Error while unliking post",
         message:err.message,
     })
    }
 }

exports.dummyLikes=async(req,res)=>{
    res.send("this is your dummy route");
}