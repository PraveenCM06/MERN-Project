import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        // console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 flex flex-col items-center">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? 
      (
        <Spinner />
      ) 
        : 
      (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">ID</span>
            {book.book && book.book._id ? <span>{book.book._id}</span> : <span>Loading...</span>}
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span className="text-black">
            {book.book && book.book.title ? <span>{book.book.title}</span> : <span>Loading...</span>}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>
            {book.book && book.book.author ? <span>{book.book.author}</span> : <span>Loading...</span>}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>
            {book.book && book.book.publishYear ? <span>{book.book.publishYear}</span> : <span>Loading...</span>}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Created time</span>
            <span>
                {book.book && book.book.createdAt ? 
                  (<span>{new Date(book.book.createdAt).toString()}</span>) 
                    : 
                  (<span>Loading...</span>)
                }
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>
              {book.book && book.book.updatedAt ?
                (<span>{new Date(book.book.updatedAt).toString()}</span>)
                :
                (<span>Loading...</span>)  
            }
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
