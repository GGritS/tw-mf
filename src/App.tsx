import { useState } from "react";
import { Header } from "./components/header";
import { Headliners } from "./components/headliners";
import { Hero } from "./components/hero";
import { ToggleTheme } from "./components/toggle-theme";
import { Tickets } from "./components/tickets";
import { Lineup } from "./components/lineup";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div className={`${isDarkTheme ? "dark" : "light"}`}>
      <ToggleTheme isDarkTheme={isDarkTheme} onClick={handleChangeTheme} />
      <Header />
      <Hero />
      <div className="dark:bg-zinc-900 w-full text-black dark:text-white">
        <div className="max-w-screen-lg mx-auto ">
          <Headliners />
          <Lineup />
          <Tickets />
        </div>
      </div>
    </div>
  );
}

export default App;
