require("dotenv").config();
const express=require("express")
const movierouter=require("./routes/movies/movies.js")

const db=require("./db/index.js")

const app=new express();

const port=process.env.PORT ||8080;

db()
app.use(express.json());
app.use("/movies",movierouter);

app.listen(port,()=>{
     console.log(`EXpress app listening at http://localhost:${port}`)
}); 
