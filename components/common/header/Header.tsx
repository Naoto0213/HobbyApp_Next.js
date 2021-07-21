import Link from "next/Link";
import { HEADER } from "../../../config/header";

const Header = () => {
  return (
    <>
      <header className="w-screen bg-purple-600 py-6 px-2 sm:px-16 sm:px-24 flex flex-col sm:flex-row items-center sm:justify-between justify-center">
        <div className="WhiteText">
          <Link href="/">
            <a>ホビーライク</a>
          </Link>
        </div>
        <ul className="flex justify-center items-center pt-3 sm:pt-0">
          {HEADER.NAV.map((item) => {
            return (
              <li className="px-3 WhiteText ">
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
