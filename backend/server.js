import express from "express";
import { configDotenv } from "dotenv";
import { connectDb } from "./config/db.js";
import v1Route from "./routes/index.js";
import cors from "cors"
configDotenv();

const PORT = process.env.PORT || 3000

const app = express();
app.use(cors())
app.use(express.json())

app.use("/api/v1",v1Route)

// app.post("/",(req,res)=>{
//     res.send("Server is ready")
// })
  
 
app.listen(3000,()=>{
    connectDb()
    console.log(`server started at http://localhost:${PORT}`);
})