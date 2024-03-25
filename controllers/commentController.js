const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

// Controller function to create a comment
exports.createComment = async (req, res) => {
    // Retrieve data from the request body
    try {
        const { post, user, body } = req.body;

        // Do a Comment on given blog
        const comment = new Comment({
            post, user, body
        });

        // Save the comment
        const savedComment = await comment.save();

        // Find the post by id and update it to add the comment
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
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
            error: "Error while creating comments"
        });
    }
};


