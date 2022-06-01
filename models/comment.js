const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema(
    {
        articleId: String,
        authorId: String,
        commentContent: String,
    },
    { timestamps: true }
);

CommentSchema.virtual('commentId').get(function () {
    return this._id.toHexString();
});
CommentSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('Comment', CommentSchema);
