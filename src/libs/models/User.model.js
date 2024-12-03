const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        user_id : {
            type : String,
            required : true,
            unique : true
        },
        user_name : {
            type : String,
            required : true
        },
        user_mail : {
            type : String,
            required : true,
            unique : true 
        },
        user_password : {
            type : String,
            require : true
        },
        user_profile : String,
        liked_post : {
            type : String
        },
        saved_post : [{
            type : String,
        }]
    }
)

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;