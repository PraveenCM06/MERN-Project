import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import SingleBookCard from "./SingleBookCard";

const BooksCard = ({ books }) => {
  console.log('card');
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => <SingleBookCard key={item._id} book={item}/>)}
    </div>
  );
};

export default BooksCard;
