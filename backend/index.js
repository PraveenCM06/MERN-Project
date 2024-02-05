import express, { response } from "express";
import { PORT, mongoDBurl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoutes.js'
import cors from 'cors';

const app = express();

//MiddleWare for parsing JSON data in the request body
app.use(express.json());


//Middleware for handling CORS policy
//CORS- Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port)
// other than its own from which a browser should permit loading resources.
//https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

//METHOD 1 - allow all origins with default of cors (*)
app.use(cors());


//METHOD 2 - allow Custom Origins - *****BETTER WAY TO DO IT THAN METHOD 1*********
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods:['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders:['Content-Type']
// })
// );

app.get('/',  (request,response)=>{
    console.log(request);
    return response.status(255).send("HELLO")
})

app.use('/books', booksRoute);

mongoose.connect(mongoDBurl)
.then(()=>{
    console.log("connected successfully");
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error)=>{
    console.log("Connection failed");
})

