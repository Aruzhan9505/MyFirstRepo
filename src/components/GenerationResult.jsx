import React from 'react'

const GenerationResult = ({ generatedText, urlOfImage, showResult = true }) => {
  return (
    <div className="">
      <div className="w-[800px]  bg-teal-500  bg-opacity-25  flex-col md:flex  justify-center   items-center rounded-3xl gap-10">
        <h3 className="">GenerationResult</h3>
        <img src={urlOfImage} alt="generated image" width={300} height={300} />
        <div className="w-4/6 border-2 border-black rounded-2xl  ">
          {generatedText}
        </div>
        {/* <div className="w-2/6 border-2 border-black rounded-2xl  "></div> */}
      </div>
    </div>
  );
};

export default GenerationResult;
