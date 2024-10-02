import React from 'react'
import { FaSpinner } from "react-icons/fa";

const GenerationResult = ({
  urlOfImage,generatedText,
  generateText,
  showResult = true,
  isloding,
}) => {
  return (
    <div className="w-[800px] mb-10">
      <div className="w-[800px]  bg-teal-500  bg-opacity-25  flex-col md:flex  justify-center   items-center rounded-3xl gap-10">
        <h3 className="">GenerationResult</h3>
        <img src={urlOfImage} alt="generated image" width={300} height={300} />
        <div className=" ">
          {generatedText}
          <button
            onClick={() => generateText()}
            className="px-4 h-[50px] m-4 rounded-2xl bg-indigo-400"
          >
            {isloding ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              "Generate Book"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerationResult;
