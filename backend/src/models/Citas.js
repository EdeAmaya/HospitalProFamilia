import {Schema,model} from "mongoose";

const citasShema = new Schema({
    fechas: {
        type: String,
        require: true,
    },

    hora: {
        type: String,
        require: true, 
    },
    
    motivo:{
        type:String

    },
    doctorAsignado:{
        type:String
    },
    pacienteAsignado:{
        type:String
    },
},{
    timestamps : true,
    strict:false
})

export default model("Citas",citasShema)