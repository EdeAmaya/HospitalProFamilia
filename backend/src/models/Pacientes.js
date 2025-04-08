import {Schema,model} from "mongoose";

const pacientesShema = new Schema({
    nombre: {
        type: String,
        require: true,
        maxLength:100
    },

    edad: {
        type: Number,
        require: true,
        maxLength:3  
    },
    
    correo:{
        type:String
    },

    contraseña:{
        type:String
    },
    telefono:{
        type:String
    },

    isVerified:{
        type:Boolean
    }

},{
    timestamps : true,
    strict:false
})

export default model("Pacientes",pacientesShema)