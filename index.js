import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import encuestaRoute from "./routes/encuestas.js"



const app = express()
dotenv.config()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//conectar a mongodb

const conectarMongoDB = async () =>{
    try {
        const conn = mongoose.connect(process.env.URI_MONGO);
        console.log("conectado a mongoDB")
    } catch (error) {
        console.log(error)
    }

}


app.use((_,res,next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-Width,Content-type,Accept"
    );
    next();
});

app.get('/',(req, res) =>{
    return res.send('Hello World')
});

app.use("/api/v1/encuestas",encuestaRoute);

app.listen(process.env.PORT,() => {
    console.log(`Escuchando el puerto ${process.env.PORT}`)
    conectarMongoDB();
}) 
  

