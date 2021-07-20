import Link from "next/Link";
import { HEADER } from "../../../config/header";
const Header = () => {
  return (
    <>
      <header className="w-screen bg-purple-600 py-6 px-24 flex flex items-center justify-between">
        <div className="WhiteText">
          <Link href="/">
            <a>ホビーライク</a>
          </Link>
        </div>
        <ul className="flex">
          {HEADER.NAV.map((item) => {
            return (
              <li className="pr-6 WhiteText">
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
