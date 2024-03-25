
const Post = require('../models/postModel');
const Like = require('../models/likeModel');

// Controller function to create a comment
exports.createLike = async (req, res) => {
    // Retrieve data from the request body
    try {
        const { post, user } = req.body;

        // Do a Comment on given blog
        const like = new Like ({
            post, user
        });

        // Save the comment
        const savedLike = await like.save();

        // Find the post by id and update it to add the comment
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true })
                                          .populate("comments")
                                          .exec();

        // Send success response
        res.json({
            post: updatedPost,
        });
    } catch (error) {
        // Send error response
        return res.status(500).json({
            success: false,
            error: "Error while doing Likes"
        });
    }
 };
 exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;

        // Find the like document to remove
        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

        if (!deletedLike) {
            return res.status(404).json({
                success: false,
                error: 'Like not found'
            });
        }

        // Update the post to remove the like
        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { likes: deletedLike._id } }, { new: true });

        res.json({
            post: updatedPost,
            message: 'Post unliked successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Error while unliking post'
        });
    }
};

 

