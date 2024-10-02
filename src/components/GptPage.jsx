import Choose from "./Choose";
import Options from "./Options";

const GptPage = () => {
  return (
    <div className="pt-20 bg-green-300  ">
      <div className="flex flex-col items-center text-white">
        <h1>Book AI</h1>
        <p>
          Select the genre you want to use, and our editor will provide you with
          a book from these genres, then click on the button below to get the
          book!
        </p>
        <h3>Selected Books:</h3>
      </div>
      <div className="flex flex-col  items-center">
        <Choose />
      </div>
    </div>
  );
};

export default GptPage;
