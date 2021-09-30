// const User          = require("./../models/user")
// const Post          = require("./../models/post")

// exports.createPost = async (req, res) => {

    // const dbUsers = await User.find()
    
//     console.log(dbUsers)

//     res.render("posts/create", {
//         dbUsers
//     })

// }


// exports.createPostForm = async (req, res) => {

//     // datos d formulario
//     const { title, author, content } = req.body

//     const newPost = await Post.create({ title, author, content })

//     console.log(newPost)


//     await User.findByIdAndUpdate(author, { $push: { posts: newPost._id } } )

//     return res.redirect("/posts")

// }

// exports.listPosts = async (req, res) => {

//     const posts = await Post.find().populate("author")

//     console.log(posts)

//     res.render("posts/list", {
//         posts
//     })


// }