import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
          {/* {console.log(book.publishYear)} */}
        </h2>
        <h5 className="my-2 text-gray-600">{book._id}</h5>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-3">More Information</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          asperiores maiores veniam, placeat dolorem quod dolores reiciendis.
          Culpa non facilis, impedit adipisci eos dolorum temporibus pariatur
          nemo, quos architecto accusantium? Fugiat optio, voluptas provident
          officia sit a impedit inventore libero labore error similique vitae
          voluptatum laboriosam eligendi cumque alias sequi harum veritatis?
          Dolore aperiam nostrum ipsam culpa velit porro saepe.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
