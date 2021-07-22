import Link from "next/Link";
import { HEADER } from "../../../config/header";
import HamburgerMenu from "../../ui/molecules/HamburgerMenu";

const Header = () => {
  return (
    <>
      <header className="w-screen bg-purple-600 py-6 px-6 sm:px-24 flex justify-between">
        <Link href="/">
          <a className="text-xl font-bold text-gray-100 pt-1">ホビーライク</a>
        </Link>

        <div className="sm:hidden block">
          <HamburgerMenu />
        </div>
        <ul className="sm:flex justify-center items-center pt-3 sm:pt-0 hidden ">
          {HEADER.NAV.map((item) => {
            return (
              <li className="px-2 WhiteText sm:px-3">
                <Link href={item.link}>
                  <a>{item.label}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
};

export default Header;
