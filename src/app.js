import express from "express"
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"
import routes from "./routes/index.js"

db.on("error",console.log.bind(console,"Erro de conexão com o banco"))
db.once("open",()=>{
    console.log("Conexão com o banco feita com sucesso")
})

const app = express()
app.use(express.json())

routes(app)

app.get("/",(req,res)=>{
    res.status(200).send("pagina inicial")
})









function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app;