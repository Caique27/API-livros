import app from "./src/app.js"

const port = process.env.PORT || 8877;


app.listen(port,()=>{
    console.log(`Servidor escutando na porta ${port}`)
})