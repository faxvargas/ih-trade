const bcryptjs      = require("bcryptjs")
const saltRounds    = 10

const User          = require("./../models/user")

exports.createUser = async (req,res)=>{
    res.render("auth/signup")
}

exports.createUserForm = async (req,res)=>{
    const {username,email,password} = req.body

// encriptacion 
const salt = await bcryptjs.genSalt(saltRounds)
// password irreversible
const hashedPassword = await bcryptjs.hash(password,salt)

// se ingresa el usuario con un password encriptado 
const newUser = await User.create({
    username,
    email,
    passwordHash : hashedPassword
})
res.redirect("/")
}
exports.loginUser = async(req,res)=>{
    res.render("auth/login")
}

exports.loginUserForm = async (req,res)=>{
    const {email,password} = req.body
    if(email=== "" || password === ""){
        return res.render("auth/login",{
            errorMessage: "Puede que falte uno o dos campos para llenar, no puede dejarlos vacios."
        })
    }
    // se busca el usuario en base de datos 
    try{
        const foundUser = await User.findOne({email})
        // en caso de que no existe se manda un mensaje de error 
        if(!foundUser){
            return res.render("auth/login",{
                errorMessage: "El usuario o la constraseña son incorrectas.Intente nuevamente"
            })
        }
        // en caso se encuentre se compara la contraseña del formulario con la de la base de datos 
        const isItMatched = await bcryptjs.compareSync(password,foundUser.passwordHash)
        // si no coincide 
        if(isItMatched === false){
            return res.render("auth/login",{
                errorMessage: "El usuario o la constraseña son incorrectas.Intente nuevamente"
            })
        }
        // en caso coincida se crea una sesion y retorna una pagina de exito 
        req.session.currentUser = foundUser
        return res.render("users/profile",{
            foundUser
        })
    
}catch(error){
    console.log(error)
}
}
exports.logoutUser = (req, res) => {

    // ELIMINAR LA COOKIE DEL NAVEGADOR
    req.session.destroy((err) => {
        if(err){
            console.log(err)
        }

        res.redirect("/")

    })

}