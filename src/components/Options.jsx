import React, { useState, useEffect } from "react";

const Options = ({setTextFromOptionsComponent}) => {


  const [whatGenre, setWhatGenre] = useState("");
  const [whatCategory, setWhatCategory] = useState("");
  const [NumberOfPages, setNumberOfPages] = useState("");


  const changeTextOptions = () => {
    setTextFromOptionsComponent(`${whatGenre}, ${whatCategory}, ${NumberOfPages}`);
  }

  useEffect (() => {
    changeTextOptions();

  },[ whatGenre, whatCategory, NumberOfPages]); 




  

  return (
    <div className="w-full h-[600px] bg-green-300 flex flex-col sm:flex items-center   text-black ">
      <div className="space-y-3">
        <h3 className="pl-10">Option</h3>
        <p>Fill out the options .</p>
      </div>
      <div className="w-[800px] h-[350px] bg-blue-400 bg-opacity-25 flex flex-wrap justify-center items-center rounded-3xl p-10 gap-10">
        <div>
          <label For="what genre?">What genre?</label>
          <select
            name="what genre?"
            id="what genre?"
            onChange={(e) => setWhatGenre(e.target.value)}
            className="w-[200px] h-[30px] flex flex-col rounded-md pl-5 "
          >
            <option value="Dramma">Drama</option>
            <option value="Fantastic">Fantastic</option>
            <option value="Comedy">Comedy</option>
            <option value="Romance">Romance</option>
            <option value="Detective">Detective</option>
          </select>
        </div>
        <div>
          <label htmlFor="What Category?"> What Category?</label>
          <select
            name="What Category?"
            id="What Category?"
            onChange={(e) => setWhatCategory(e.target.value)}
            className="w-[200px] h-[30px] flex flex-col rounded-md pl-5 "
          >
            <option value="Psyhology">Psyhology</option>
            <option value="Health">Health</option>
            <option value="Children's books">Children's books</option>
            <option value="History">History</option>
            <option value="Business">Business</option>
          </select>
        </div>
        <div>
          <label htmlFor="Number of pages?"> Number of pages?</label>
          <select
            name="Number of pages?"
            id="Number of pages?"
            onChange={(e) => setNumberOfPages(e.target.value)}
            className="w-[200px] h-[30px] flex flex-col rounded-md pl-5 "
          >
            <option value="1-50">1-50</option>
            <option value="50-100">50-100</option>
            <option value="100-150">100-150</option>
            <option value="150-200">150-200"</option>
            <option value="200+">200+</option>
          </select>
        </div>
        <div className="">
          <p>Author of the book?</p>
          <input type="text" placeholder="Select a author" />
        </div>
        <div>
          <p>Book Rating?</p>
          <input type="text" placeholder="1/10 " />
        </div>
        <div>
          <p>Unnecessary genre?</p>
          <input type="text" placeholder=" Enter banned genres" />
        </div>
      </div>
      {/* 
      <p>What genre: {whatGenre}</p>
      <p>Genre you prefer: {genreYouPrefer}</p>
      <p>Type of genre: {typeOfGenre}</p> */}
    </div>
  );
};

export default Options;
 