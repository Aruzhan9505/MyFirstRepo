import '../index.css';
import book2 from '../../public/images/book2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="w-full h-[50px] bg-green-300 flex justify-between items-center pl-10 pr-10 fixed">
        <img
          src={book2}
          width={250}
          height={200}
          className="w-[90px] h-[50px] rounded-full"
          alt="logo"
        />
        {/* <button>Generate</button> */}
        <div className="flex text-center text-lg px-6 py-2 text-blue-400 hover:text-white space-x-5 font-bold">
          <Link to={'/generation'}className=" rounded-full">Generate</Link>
          <Link to={'/'} className=" rounded-full">MainPage</Link>
          <Link to={'/aboutus'} className=" text-blue-400 hover:text-white">About Us</Link>
        </div>
      </div>
    ); 
} 


export default Navbar;