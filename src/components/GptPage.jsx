import Choose from "./Choose";
import Options from "./Options";

const GptPage = () => {
  return (
    <div className="pt-20 bg-green-300  ">
      <div className="flex flex-col items-center text-white">
        <h1>Book AI</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          recusandae quae molestiae corporis id provident inventore blanditiis
          in quibusdam illo.
        </p>
        <h3>Selected Ingredients:</h3>
      </div>
      <div className="flex flex-col  items-center">
        <Choose />
      </div>
    </div>
  );
};

export default GptPage;
