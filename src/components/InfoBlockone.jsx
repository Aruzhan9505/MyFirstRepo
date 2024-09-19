import "../index.css";
import Unknown from "../../public/images/Unknown.png";

const InfoBlockone = () => {
  return (
    <div className="w-full  bg-green-300 flex flex-col md:flex-row pt-40 justify-evenly items-center  pl-10 pr-10">
      <div className="w-[200px] text-white">
        <div className="space-y-3">
          <h1 className="text-xl font-bold w-[400px] md:w-[768px]">
            Eat tasty, healthy and delicious food!
          </h1>
          <p className="text-sm  md:w-[768px]">
            Welcome to our cooking! it is very  tasty , appetizing and healthy here !</p>
          <button className="w-[150px] h-[40px] bg-green-500 rounded-xl">Generate</button>
        </div>
      </div>
      <div>
        <img src={Unknown} alt="Unknown" width={400} height={300} />
      </div>
    </div>
  );
};

export default InfoBlockone;