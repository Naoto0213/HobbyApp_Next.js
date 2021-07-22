import Header from "../components/common/header/Header";
import { Main } from "../components/home/Main";
import HobbyColunm from "../components/home/HobbyColunm";
export default function Home() {
  return (
    <div className="bg-gray-800 h-screen">
      <Header />
      <Main />
      <HobbyColunm />
    </div>
  );
}
