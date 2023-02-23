import express  from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import {Configuration,OpenAIApi} from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async(req,res)=>{
    res.status(200).send({
        message: "this is chat GPT api ai",
    })
})

app.post("/",async(req,res)=>{
    try {
        
    } catch (err){
        console.error(err);
        res.status(500).send(err)
    }
})

app.listen(4000,()=>console.log("server is running"))