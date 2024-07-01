import cat from "../../assets/svg/Dialog/Cat.svg";
import TwoCat from "../../assets/svg/Dialog/TwoCat.svg";

const InfoBlock = () => {
  return (
    <div
      className=" flex items-start"
      style={{
        position: "absolute",
        left: "22%",
        transform: "translateX(-50%)",
        top: "30%",
      }}
    >
      <div className="max-w-md p-6 bg-white shadow-lg rounded-lg ml-4">
        <div className="flex items-center mb-4">
          <div>
            <img src={cat} alt="Cat Icon" className="w-25 h-20" />
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
