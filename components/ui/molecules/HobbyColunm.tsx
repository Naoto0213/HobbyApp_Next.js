import DecorateBorderTitle from "../atoms/DecorateBorderTitle";
import DecorateMiniCard from "../atoms/DecorateMiniCard";
import { HOME } from "../../../config/home";

const HobbyColunm = () => {
  return (
    <div className="py-24 bg-gray-800 ">
      <DecorateBorderTitle
        textColor="text-gray-100"
        borderColor="border-purple-500"
      >
        趣味を登録
      </DecorateBorderTitle>
      <div className="flex items-center items-center justify-center flex-col  sm:flex-row">
        {HOME.HOBBY_COLUNM.map((items) => {
          return (
            <DecorateMiniCard
              link={items.link}
              label={items.label}
              bgColor="bg-purple-600 mt-10 sm:mt-0"
              textColor=" text-gray-100"
            />
          );
        })}
      </div>
    </div>
  );
};

export default HobbyColunm;
