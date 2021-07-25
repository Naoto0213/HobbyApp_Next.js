import Image from "next/image";
import HobbyAddButton from "./HobbyAddButton";

const HobbyCard = ({ image, label }) => {
  return (
    <>
      <div className="shadow-2xl bg-gray-100 transform transition duration-300 ease-in-out hover:scale-110  flex mx-6 mt-12">
        <Image src={image} alt="" height={120} width={220} />
        <div className="p-2 w-48">
          <div className="w-11/12 break-words">
            <p className="text-gray-900 text-md font-bold">{label}</p>
          </div>
          <div className="flex justify-end pt-16 pr-1">
            <HobbyAddButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default HobbyCard;
