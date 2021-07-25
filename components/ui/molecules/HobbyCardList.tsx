import HobbyCard from "../atoms/HobbyCard";
import test from "../../../public/test.jpg";

const HobbyCardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <HobbyCard image={test} label="Hello" />
      <HobbyCard image={test} label="sssssssssssssssss" />
      <HobbyCard image={test} label="Hello" />
      <HobbyCard image={test} label="sssssssssssssssss" />
      <HobbyCard image={test} label="Hello" />
      <HobbyCard image={test} label="sssssssssssssssss" />
      <HobbyCard image={test} label="Hello" />
      <HobbyCard image={test} label="sssssssssssssssss" />
    </div>
  );
};

export default HobbyCardList;
