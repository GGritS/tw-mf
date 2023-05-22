import { FC } from "react";

type MobileMenuSubItemProps = {
  title: string;
  isOpen: boolean;
};

export const MobileMenuSubItem: FC<MobileMenuSubItemProps> = ({
  title,
  isOpen,
}) => {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } group-hover:block  relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors p-4 w-full items-center justify-center`}
    >
      <span>{title}</span>
    </div>
  );
};
