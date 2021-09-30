const mongoose          = require("mongoose")

const userSchema = mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: [true, "Debe ingresar un email acá"],
        unique: true,
        lowercase: true,
        trim: true        
    },
    passwordHash: {
        type: String,
        required: [true, "Debe ingresar una contraseña acá"]
    },
    posts: [{      
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }] 
},
{
    timestamps: true
})
skin: [{      
    type: mongoose.Schema.Types.ObjectId,
    ref: "Skin"
}] 
{
    timestamps: true
}

const User = mongoose.model("User", userSchema)


// 4. EXPORTACIÓN
module.exports = User