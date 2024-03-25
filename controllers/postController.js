const Post=require('../models/postModel');
exports.createPost=async(req,res)=>{
            try{
                        const {title,body}=req.body;
                        // Create Post Object and The save It
                        const post=new Post({
                                    title,body
                        })
                        const savedPost=await post.save();
                        res.json({
                                    post:savedPost,
                        })

            }
            catch (error) {
        // Send error response
        return res.status(500).json({
            success: false,
            error: "Error while creating post"
        });
    }
};
exports.getAllPosts=async(req,res)=>{
            try{
                        const posts=await Post.find();
                        res.json({
                                    posts,
                        })

            }
            catch (error) {
        // Send error response
        return res.status(500).json({
            success: false,
            error: "Error while getting Comments on  post"
        });
    }

};