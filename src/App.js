import "./App.css";
import productspage from "./assets/productspage.png";
import listingpage from "./assets/listingpage.png";
import createlisting from "./assets/createlisting.png";
import loginpage from "./assets/loginpage.png";

function App() {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen relative flex justify-center items-center overflow-y-scroll lg:overflow-hidden'>
      <div className='flex align-center items-center flex-col'>
        <h1 className='text-9xl font-extrabold mb-5 text-white animate-pulse'>
          Edubooks
        </h1>
        <h2 className='text-4xl font-extralight mb-5 text-white tracking-widest animate-bounce'>
          Platform For Selling and Buying Second Hand Textbooks
        </h2>
        <div className='flex flex-col space-x-16 cursor-pointer lg:flex-row'>
          <img
            src={productspage}
            alt={productspage}
            className='ease-out duration-300 h-[30rem] mt-10 hover:scale-110'
          />
          <img
            src={listingpage}
            alt={listingpage}
            className='ease-out duration-300 h-[30rem] mt-10 hover:scale-110'
          />
          <img
            src={createlisting}
            alt={createlisting}
            className='ease-out duration-300 h-[30rem] mt-10 hover:scale-110'
          />
          <img
            src={loginpage}
            alt={loginpage}
            className='ease-out duration-300 h-[30rem] mt-10 hover:scale-110'
          />
        </div>
        <div className='flex space-x-16 mt-10'>
          <button className='ease-out duration-300 p-2 rounded-md text-white font-bold bg-red-600 w-44 hover:bg-red-700'>
            DOWNLOAD
          </button>
          <button className='ease-in duration-300 p-2 rounded text-white font-bold border-solid border-2 border-red-600 w-44 hover:bg-red-600 hover:animate-pulse'>
            INFO
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
