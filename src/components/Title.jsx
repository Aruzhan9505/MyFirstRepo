import "../index.css";
// import logo from "../../public/images/logo.jpeg";
import delicious from "../../public/images/delicious.webp";
import Salad from "../../public/images/Salad.png";
import avocado from "../../public/images/avocado.png";

const Title = () => {
  return (
    <div className="w-full h-[430px] bg-red-400 flex flex-col md:flex-row justify-evenly items-center pl-10 pr-10">
      <div className="flex justify-evenly items-center  ">
        <img src={delicious} alt="delicious" width={150} height={150} />
      </div>
      <div className=" flex justify-items-center "> 
        <img src={Salad} alt="Salad" width={130} height={130} />
      </div>
      <div >
        <img src={avocado} alt="avocado" width={200} height={200} />
      </div>
    </div>
  );
};

export default Title ;
