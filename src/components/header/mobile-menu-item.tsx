import { FC, useState } from "react";
import { MenuItems } from "../../types";
import { MobileMenuSubItem } from "./mobile-menu-subItem";

type MobileMenuItemProps = {
  item: MenuItems;
};

export const MobileMenuItem: FC<MobileMenuItemProps> = ({ item }) => {
  const [isMobileSubItemsOpen, setIsMobileSubItemsOpen] = useState(false);
  const handleOpenSubtitles = () => {
    setIsMobileSubItemsOpen(!isMobileSubItemsOpen);
  };
  return (
    <div
      onClick={handleOpenSubtitles}
      className={`z-20  h-full flex flex-col cursor-pointer items-center justify-center text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ${
        item.title !== "Tickets" ? item.styles : ""
      }`}
    >
      <div className={` ${item.title === "Tickets" ? item.styles : ""}`}>
        {item.title}
      </div>
      {item.subtitles &&
        item.subtitles.map((sub_item, sub_item_index) => (
          <MobileMenuSubItem
            key={sub_item_index}
            title={sub_item.title}
            isOpen={isMobileSubItemsOpen}
          />
        ))}
    </div>
  );
};
