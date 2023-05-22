import { FC } from "react";
import { MenuItems } from "../../types";

type MenuItemsPcProps = {
  items: MenuItems[];
};

export const MenuItemsPC: FC<MenuItemsPcProps> = ({ items }) => {
  return (
    <div className="md:flex hidden flex-1  items-center justify-end ">
      {items.map((menu_item, menu_item_index) => (
        <div
          key={menu_item_index}
          className="group relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out"
        >
          <span>{menu_item.title}</span>
          <div className="group-hover:block hidden bg-pink-500 absolute right-0 top-full whitespace-nowrap rounded-b-md text-right">
            {menu_item.subtitles &&
              menu_item.subtitles.map((sub_item, sub_item_index) => (
                <div
                  key={sub_item_index}
                  className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200"
                >
                  <span>{sub_item.title}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
