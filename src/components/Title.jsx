import "../index.css";
import book2 from "../../public/images/book2.png";
import  book from "../../public/images/book.png";


const Title = () => {
  return (
    <div className="w-full h-[430px] bg-green-200 bg-opacity-400 flex flex-col md:flex-row justify-evenly items-center pl-10 pr-10">
      <div className="flex justify-evenly items-center  ">
        <img src={book} alt="book" width={450} height={450} />
      </div>
    </div>
  );
};

export default Title ;
