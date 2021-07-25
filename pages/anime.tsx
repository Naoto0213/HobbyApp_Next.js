import React from "react";
import DecorateBorderTitle from "../components/ui/atoms/DecorateBorderTitle";
import SearchButton from "../components/ui/atoms/SearchButton";
import HobbyColunm from "../components/ui/molecules/HobbyColunm";
import HobbyCardList from "../components/ui/molecules/HobbyCardList";

const anime = () => {
  return (
    <div className="bg-gray-200 pb-24 ">
      <HobbyColunm />
      <DecorateBorderTitle
        textColor="text-gray-600"
        borderColor="border-green-600"
      >
        好きなアニメを登録
      </DecorateBorderTitle>
      <SearchButton />
      <div className="flex align-center justify-center mt-12">
        <HobbyCardList />
      </div>
    </div>
  );
};

export default anime;
