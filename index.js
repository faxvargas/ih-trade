// IMPORTACIONES 

const express = require("express")
const app = express()
const hbs = require("hbs")
const connectingDB = require("./config/db")

// MIDDLEWARES 

// variables de entorno 

require("dotenv").config()

// se activan datos 

connectingDB() 
// carpeta public 
app.use(express.static(__dirname+"/public"))
// carpeta views 
app.set("view engine", "hbs")
// datos d formularios 
app.use(express.urlencoded({extended:true}))
// gestion d sesiones 
require("./config/session.config")(app)

// app.use((req,res)=>{
//   res.locals.currentUser = req.session.currentUser
  
// })

// RUTEO 
app.use("/auth", require("./routes/auth"))
app.use("/user",require("./routes/user"))
app.use("/posts",require("./routes/post"))
const skinRoutes = require("./routes/skin")
app.use("/", skinRoutes)
app.get("/",(req,res)=>{
    res.render("index")
})





// SERVIDOR 

app.listen(process.env.PORT,()=>{
  console.log(`Trade sv is running on port ${process.env.PORT} :D`)
  return
})