import "../index.css";
import dish from "../../public/images/food.webp";
const InfoBlock = () => {
  return (
    <div className="w-full  bg-blue-500 flex justify-evenly items-center pl-10 pr-10">
      <div className="w-[200px]">
        <div className="space-y-3">
          <h1 className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            quaerat!
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorum perspiciatis, assumenda accusamus itaque ea. Iure, excepturi.</p>
          <button className="w-[150px] h-[40px] bg-green-500 rounded-xl">Generate</button>
        </div>
      </div>
      <div>
        <img src={dish} alt="dish" width={500} height={500} />
      </div>
    </div>
  );
};

export default InfoBlock;
