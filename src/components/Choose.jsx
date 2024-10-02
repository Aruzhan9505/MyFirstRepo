import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Options from "./Options";
// import { FaSpinner } from "react-icons/fa";
import GenerationResult from "./GenerationResult";
const Choose = () => {

const [textFromOptionsComponent, setTextFromOptionsComponent] = useState('');
 const [generatedText, setGeneratedText] = useState('');
const apikey = import.meta.env.VITE_API_KEY;
const apiurl = import.meta.env.VITE_API_URL;


const [isloding, setIsLoding] = useState(false);
const [showResult, setShowResult] = useState(false);




const collectChooses = () => {
  let text =
    "сoздай  мне картинку  книги во весь рост в жанре: " +
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
   
  

  const generateText = async() => {

    setIsLoding(true);

    console.log('generating text...');
    let prompt = `напиши мне  краткое описание сюжета книги и включай эти детали
      1. Начало книги: Опишите, где и с кем начинается история.
      2.Главный конфликт: Кратко изложите ключевую проблему или задачу героя.
      3.Кульминация: Укажите, как развивается напряжение и приближается к своей вершине.
      4.Завершающий аккорд: Дайте намек на возможное завершение без раскрытия всех деталей.`;

    try {
      const response = await fetch(apiurl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
          body: JSON.stringify({
           prompt: prompt,
           n: 1,
           max_tokens: 250,
        }),
      });

       const data = await response.json();
       console.log('data:', data);
      
       const text = data.choices[0].text;
       setGeneratedText(text);
       console.log(text);


       await generateImage(collectChooses());

       setIsLoding(false);

    } catch (error) { 
      console.error(error.response?.data?? error.toJSON?.() ?? error);
      console.error("API error" ,error);
    }
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
    <div className="flex flex-wrap md:flex-row justify-center ">
      <div className="flex flex-col md:flex-wrap items-center">
        <div className="w-[600px] md:w-[800px]  flex flex-wrap md:flex-wrap justify-center p-10">
          {ingredientsData.map((ingredient, index) => (
            <Ingredient
              key={index}
              imageSrc={ingredient.imageSrc}
              // isSelected={selectedIngredients.includes(ingredient)}
              onClick={() => handleIngredientClick(ingredient)}
            />
          ))}
        </div>
        <div>
          {/* <h3>Selected Ingredients:</h3> */}
          <ul>
            {gtpPromptText.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        {/* <img src={urlOfImage} alt="image" width={400} /> */}

        {/* <button
          onClick={() => generateText()}
          className="px-4 h-[50px] m-4 rounded-2xl bg-indigo-400"
        >
          {isloding ? (
            <FaSpinner className="animate-spin mr-2" />
          ) : (
            "Generate Book"
          )}
        </button> */}
      </div>

      <Options setTextFromOptionsComponent={setTextFromOptionsComponent} />
      {/* <p>generateText: {generatedText}</p> */}

      <GenerationResult
        urlOfImage={urlOfImage}
        generatedText={generatedText}
        generateText={generateText}
        showResult={showResult}
        isloding={isloding}
      />
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
