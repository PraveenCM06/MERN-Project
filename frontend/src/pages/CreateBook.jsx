import React, {useState, useEffect} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ToasterUi from 'toaster-ui';


const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear]= useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toaster = new ToasterUi();


  const handleSaveBook =()=>{
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    // console.log(data); 
    axios.post(`http://localhost:5555/books`, data)
    .then(()=>{
      setLoading(false);
      navigate('/');
      toaster.addToast("Created Book Successfully", "success" , {duration:5000});

    })
    .catch((error)=>{
      setLoading(false);
      alert("Error creating book");
    })
  };
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading? <Spinner/> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="title" className="text-xl mr-4 text-gray-500">Title</label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            value={title} 
            onChange={(e)=> setTitle(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className="my-4">
          <label htmlFor="author" className="text-xl mr-4 text-gray-500">Author</label>
          <input 
            type="text" 
            name="author" 
            id="author" 
            value={author} 
            onChange={(e)=> setAuthor(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className="my-4">
          <label htmlFor="publishYear" className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input 
            type="text" 
            name="publishYear" 
            id="publishYear" 
            value={publishYear} 
            onChange={(e)=> setPublishYear(e.target.value)} 
            className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateBook