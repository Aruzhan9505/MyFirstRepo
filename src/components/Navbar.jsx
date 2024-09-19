import '../index.css';
import logo from '../../public/images/logo.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="w-full h-[50px] bg-green-300 flex justify-between items-center pl-10 pr-10 fixed">
        <img
          src={logo}
          width={200}
          height={150}
          className="w-[70px] h-[40px] rounded-full"
          alt="logo"
        />
        {/* <button>Generate</button> */}
        <div className="flex text-center text-lg px-6 py-2 text-white space-x-5 font-bold">
          <Link to={'/generation'}className="  bg-blue-300 rounded-full">Generate</Link>
          <Link to={'/'} className="bg-blue-300 rounded-full">MainPage</Link>
        </div>
      </div>
    ); 
} 


export default Navbar;