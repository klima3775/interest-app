import cat from "../../assets/svg/Dialog/Cat.svg";
import TwoCat from "../../assets/svg/Dialog/TwoCat.svg";

const InfoBlock = () => {
  return (
    <div className="absolute left-0 top-1/3 w-full px-4 md:px-8">
      <div className="max-w-md p-6 bg-white shadow-lg rounded-lg ml-4 md:ml-8">
        <div className="flex items-center mb-4">
          <div>
            <img src={cat} alt="Cat Icon" className="w-20 h-20" />
          </div>
          <div className="ml-4">
            <p className="text-gray-800">
              Welcome to INTEREST, an online restaurant that combines the
              culinary delights of Japan, Italy, and delicious burgers!
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div>
            <img src={TwoCat} alt="Icon" className="w-10 h-10" />
          </div>
          <div className="ml-4">
            <p className="text-gray-800">I'm hungry :O</p>
          </div>
        </div>
        <button className="bg-red-500 text-white p-2 rounded-lg">
          To the menu
        </button>
      </div>
    </div>
  );
};

export default InfoBlock;
