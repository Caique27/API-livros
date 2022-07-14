import mongoose from "mongoose"
mongoose.connect("mongodb+srv://Caique2004:caique27@cluster0.cyijk.mongodb.net/Curso-API")
let db = mongoose.connection

export default db