import "../index.css";
import Unknown from "../../public/images/Unknown.png";

const InfoBlockone = () => {
  return (
    <div className="w-full  bg-green-300 flex flex-col md:flex-row pt-40 justify-evenly items-center gap-10 pl-10 pr-10">
      <div className="w-[200px] text-white">
        <div className="space-y-3">
          <h1 className="text-xl font-bold w-[400px] md:w-[768px]">
            Get your coveted book!
          </h1>
          <p className="text-sm  md:w-[768px]">
            Welcome to the generation site! Here you can find the desired interesting book!</p>
          <button className="w-[150px] h-[40px] bg-violet-400 rounded-xl">Generate</button>
        </div>
      </div>
      <div>
        <img src={Unknown} alt="Unknown" width={400} height={300} />
      </div>
    </div>
  );
};

export default InfoBlockone;