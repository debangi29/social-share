import { model, models, Schema } from "mongoose"

const usernameSchema  = new Schema({
    uri:{
        type: String,
        required: true,
        min:1,
        unique: true
    },
    owner:{
        type: String,
        required : true
    },
    displayName:{
        type: String,
        default:""
    },
    location:{
        type: String,
        default:""
    },
    bio:{
        type: String,
        default:""
    },
    bgType:{
        type: String,
        default:"color"
    },bgColor:{
        type: String,
        default:"#000000"
    }

},{timestamps: true})

export const UserPage = models.UserPage || model('UserPage' , usernameSchema)

