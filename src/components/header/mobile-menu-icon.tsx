import React, { FC } from "react";
import { UilMultiply } from "@iconscout/react-unicons";

type MobileMenuIconProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const MobileMenuIcon: FC<MobileMenuIconProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col gap-y-1 cursor-pointer group peer"
      onClick={onClick}
    >
      {!isOpen ? (
        [1, 2, 3].map((burger_item) => (
          <div
            key={burger_item}
            className="bg-zinc-200 rounded-full w-8 h-1 "
          />
        ))
      ) : (
        <UilMultiply size="32" />
      )}
    </div>
  );
};
