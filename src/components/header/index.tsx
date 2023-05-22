import { FC, useState } from "react";
import logo from "./../../assets/images/logo-inverted.png";
import { MenuItemsPC } from "./menu-items-pc";
import { MobileMenuIcon } from "./mobile-menu-icon";
import { MenuItems } from "../../types";
import { MobileMenuItem } from "./mobile-menu-item";

const MENU_ITEMS: MenuItems[] = [
  { title: "Home", styles: "p-4 font-bold" },
  { title: "Lineup", styles: "p-4 font-bold" },
  {
    title: "Tickets",
    subtitles: [{ title: "Single day ticket" }, { title: "7 day ticket" }],
    styles: "p-4 group font-bold group",
  },
  { title: "Support", styles: "p-4 font-bold" },
];

export const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChangeMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="text-zinc-200 ">
      <nav className="sticky top-0 bg-gradient-to-r from-rose-500 to-pink-500 flex">
        <div className="flex items-center p-2 gap-2">
          <img alt="logo" src={logo} className="w-[50px]" />
          <div className="font-bold text-2xl">
            tw:<span className="text-sky-900">mf</span>
          </div>
        </div>
        <div className=" md:hidden  block ml-auto pr-4 my-auto">
          <MobileMenuIcon
            isOpen={isMobileMenuOpen}
            onClick={handleChangeMobileMenu}
          />

          <div className="z-20 peer-hover:to-black top-[62px] absolute bg-gradient-to-t from-rose-500 to-pink-500 w-full left-0">
            {isMobileMenuOpen &&
              MENU_ITEMS.map((menu_item, menu_item_index) => (
                <MobileMenuItem key={menu_item_index} item={menu_item} />
              ))}
          </div>
        </div>

        <MenuItemsPC items={MENU_ITEMS} />
      </nav>
    </header>
  );
};
