import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Options from "./Options";

const Choose = () => {

const [textFromOptionsComponent, setTextFromOptionsComponent] = useState('');
 
const apikey = import.meta.env.VITE_API_KEY;

const collectChooses = () => {
  let text =
    "сгенерируй мне каринку одной книги во весь рост в жанре: " +
    gtpPromptText.toString() + "и в таких инструкциях" +
    textFromOptionsComponent;
  return text;

}

const [urlOfImage, setUrlOfImage] = useState('');

  const ingredientsData = [
    { name: "Comic", imageSrc: "/images/comic.png" },
    { name: "Drama", imageSrc: "/images/drama.png" },
    { name: "poetry", imageSrc: "/images/poetry.png" },
    { name: "romance", imageSrc: "/images/romance.png" },
    { name: "fantasy", imageSrc: "/images/fantasy.png" },
    { name: "psychology", imageSrc: "/images/psyhology.png" },
    { name: "scince", imageSrc: "/images/scince.png" },
    { name: "detective", imageSrc: "/images/detective.png" },
    { name: "health", imageSrc: "/images/health.png" },
    { name: "business", imageSrc: "/images/business.png" },
  ];


const [gptPromptText, setGptPromptText] = useState([]);
// const [imageUrl, setImageUrl] = useState('');

  // const [selectedIngredients, setSelectedIngredients] = useState([]);

  // const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [gtpPromptText, setGtpPromptText] = useState([]);

  const handleIngredientClick = (ingredient) => {   
 setGtpPromptText([...gtpPromptText, ingredient.name]);
  };
   

  const generateImage = async (prompt) => {
    const opitions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apikey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: "512x512",
      }),
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        opitions
      );
      const data = await response.json();
      console.log("data of generatedImage is below:",data);
      // console.log(data);
      setUrlOfImage(data.data[0].url)

      console.log("urlOfImage " + urlOfImage);
      // setImageUrl(setUrlOfImage);

    } catch (error) {
      console.error(error);
    }   
  };


  
  
  
  
  return (
    <div className="flex flex-wrap">
      {ingredientsData.map((ingredient, index) => (
        <Ingredient
          key={index}
          imageSrc={ingredient.imageSrc}
          // isSelected={selectedIngredients.includes(ingredient)}
          onClick={() => handleIngredientClick(ingredient)}
        />
      ))}
      <div>
        {/* <h3>Selected Ingredients:</h3> */}
        <ul>
          {gtpPromptText.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <img src={urlOfImage} alt="image" width={400} />

      <button onClick={() => generateImage(collectChooses())} className="px-4 h-[50px] m-4 rounded-2xl bg-indigo-400" >Generate Book </button>
      <Options setTextFromOptionsComponent={setTextFromOptionsComponent} />
    </div>
  );
};

export default Choose;


//   return (
//     <div className="w-[900px] h-[700px] flex flex-col  md:flex items-center pt-5 text-white" >
//       <h1 className="text-xl ">Choose component:</h1>
//       <div className="flex gap-3 flex-wrap items-center pt-10">
//         {myIngredients.map((item, index) => (
//           <Ingredient key={index} name={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Choose;
