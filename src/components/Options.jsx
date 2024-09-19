import React, { useState, useEffect } from "react";

const Options = ({setTextFromOptionsComponent}) => {


  const [whatGenre, setWhatGenre] = useState("");
  const [genreYouPrefer, setGenreYouPrefer] = useState("");
  const [typeOfGenre, setTypeOfGenre] = useState("");


  const changeTextOptions = () => {
    setTextFromOptionsComponent(`${whatGenre}, ${genreYouPrefer}, ${typeOfGenre}`);
  }

  useEffect (() => {
    changeTextOptions();

  },[ whatGenre, genreYouPrefer, typeOfGenre]); 




  

  return (
    <div className="w-full h-[600px] bg-green-400 flex flex-col sm:flex items-center text-black ">
      <div className="space-y-4">
        <h3 className="pl-20">Option</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="space-y-3 mt-5">
        <div className="w-[800px] h-[400px] bg-yellow-300  bg-opacity-25 flex flex-wrap justify-center items-center gap-10">
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
            </select>
          </div>
          <div>
            <label htmlFor="What genre do you prefer?"> What genre do you prefer?
            </label>
            <select name="What genre do you prefer?" id="What genre do you prefer?" onChange={(e) => setGenreYouPrefer(e.target.value)} className="w-[200px] h-[30px] flex flex-col rounded-md pl-5 ">
              <option value="Dramma">Drama</option>
              <option value="Fantastic">Fantastic</option>
              <option value="Comedy">Comedy</option>
              <option value="Romance">Romance</option>
            </select>
          </div>
          <div>
            <label htmlFor="Type of genre?"> Type of genre?</label>
            <select name="Type of genre?" id="Type of genre?" onChange={(e) => setTypeOfGenre(e.target.value)} className="w-[200px] h-[30px] flex flex-col rounded-md pl-5 " >
              <option value="Dramma">Drama</option>
              <option value="Fantastic">Fantastic</option>
              <option value="Comedy">Comedy</option>
              <option value="Romance">Romance</option>
            </select>
          </div>
          <div className="">
            <p>What genre do you want to avoid?</p>
            <input type="text" placeholder="Select a genre" />
          </div>
          <div>
            <p>What genre do you prefer?</p>
            <input type="text" placeholder="Enter extra genres" />
          </div>
          <div>
            <p>Unnecessary genre?</p>
            <input type="text" placeholder=" Enter banned genres" />
          </div>
        </div>
      </div>
      <p>What genre: {whatGenre}</p>
      <p>Genre you prefer: {genreYouPrefer}</p>
      <p>Type of genre: {typeOfGenre}</p>
    </div>

  );
};

export default Options;
 