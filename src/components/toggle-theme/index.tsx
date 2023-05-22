import { FC } from "react";
import { UilSun } from "@iconscout/react-unicons";
import { UilMoon } from "@iconscout/react-unicons";

type ToggleThemeProps = {
  isDarkTheme: boolean;
  onClick: () => void;
};

export const ToggleTheme: FC<ToggleThemeProps> = ({ isDarkTheme, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`z-50 fixed top-24 right-0 inline-block w-12 cursor-pointer rounded-l-lg bg-zinc-900 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-900 p-2 text-3xl ${
        isDarkTheme ? "dark" : "light"
      }`}
    >
      {isDarkTheme ? <UilMoon /> : <UilSun />}
    </div>
  );
};
