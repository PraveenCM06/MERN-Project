import express from "express";
import { Book } from "../models/bookModel.js";
//CREATING ROUTER in a seperate  file to make the code modular and easy to maintain. if there are multiple routes 
//it would be hard to handle in index.js
//https://expressjs.com/en/guide/routing.html


const router = express.Router();



//POST Method - Route for saving a new book
router.post('/',async (request, response) => {
    try {
      if(!request.body.title ||  !request.body.author || !request.body.publishYear){
        return response.status(400).send({message:"Send all required fields: title, author, publishYear" });
      }
      const newBook = {
        title :request.body.title,
        author: request.body.author,
        publishYear : request.body.publishYear
      }
      const book = await Book.create(newBook);
      return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})

//GET MOTHOD - get all books at once
router.get('/', async (request, response)=>{
    try {
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message})
    }
})

//GET BY ID - get a particular book by using ID
router.get('/:id', async (request, response)=>{
    try {
        const {id} = request.params;
        const book = await Book.findById(id);
        return response.status(200).json({book})
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message})
    }
})

//UPDATE BOOK - update a particular book

router.put('/:id', async (request, response)=>{
try {
    if(!request.body.title || !request.body.author || !request.body.publishYear ){
        response.status(400).send({
            message: "Please send all fields: title, author, publishYear"
        });
    }
    
    const {id} = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);
    
    if(!result){
        return response.status(404).json({message: "Book not found"});
    }
    if(request.body.title ===result.title && request.body.author ===result.author && request.body.publishYear ===result.publishYear){
        response.status(400).send({message: "Trying to update same data as present in database already"})
    }

    return response.status(200).send({message: "book updated successfully"})

} catch (error) {
    console.log(error);
    response.status(500).send({message: error.message});
}
})


//DELETE  A Particualr book
router.delete('/:id', async (request, response)=>{
    try {
        const {id} = request.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).send({message:"Book not found"})
        }

        return response.status(200).send({message:"Book deleted successfully ✨🎉"})
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
})

export default router;