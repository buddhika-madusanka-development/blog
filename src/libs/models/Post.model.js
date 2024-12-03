const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        post_id : {
            type : String,
            required : true,
            unique : true
        },
        post_publish_date : {
            type : Date,
            required : true
        },
        auth_id : {
            type : String,
            required : true
        },
        post_image : {
            type : String,
            required : true
        },
        post_title : {
            type : String,
            required : true
        },
        post_content : {
            type : String,
            required : true
        },
        like_count : {
            type : Number,
        },
        comments : [{
            user_id : String,
            comment_text : String,
            comment_date : Date
        }],
        view_count : {
            type : Number,
        },
        tags : [{
            type : String
        }]
    }
)


const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;