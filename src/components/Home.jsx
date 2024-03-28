
import Goal from "./Goal";
import { ImagesSliderDemo } from "./Header";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";


const Home = () => {
  return (
   <>
    
    <ImagesSliderDemo />
    
    <Goal />
    <h1 className="bg-gray-100 text-center text-5xl underline mb-5 font-bold text-blue-800 hover:text-purple-600 transition-colors duration-300">Frequently Asked Questions!</h1>

    
    <div className="">
      <InfiniteMovingCardsDemo />
    </div>
    
   </>
  );
};

export default Home;
