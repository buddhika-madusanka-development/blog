const { default: mongoose } = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
        auth_id : {
            type : String,
            required : true,
            unique : true
        },
        auth_name : {
            type : String,
            require : true,
        },
        auth_description : {
            type : String,
            required : true
        }
    }
)

const Author = mongoose.models.Author || mongoose.model("Author", authorSchema);

export default Author;