import {Schema,model} from "mongoose";

const doctoresShema = new Schema({
    nombre: {
        type: String,
        require: true,
        maxLength:100
    },

    especialidad: {
        type: String,
        require: true,
        maxLength:100
    },
    
    correo:{
        type:String
    },

    contraseña:{
        type:String
    },

},{
    timestamps : true,
    strict:false
})

export default model("Doctores",doctoresShema)