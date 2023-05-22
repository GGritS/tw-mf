import { FC } from "react";
import music_icon from "./../../assets/images/logo.png";

export const Hero: FC = () => {
  return (
    <div className="bg-hero-img bg-cover bg-center  bg-fixed flex flex-col justify-center items-center h-[calc(100vh-200px)] min-h-[400px]">
      <div className="bg-white/30 w-fit py-2 px-4 rounded-xl text-center backdrop-blur-md z-10">
        <div className="relative">
          <img src={music_icon} alt="img" width="175" />
        </div>
        <div className="text-5xl font-bold text-white">
          tw:<span className="text-sky-900">mf</span>
        </div>
      </div>
      <div className="font-bold mt-3 text-sm text-white">
        keep me updated with news and promotions
      </div>
      <form className="mt-3 flex gap-2">
        <input
          type="email"
          placeholder="Email"
          className="rounded-sm  border border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-700 placeholder-zinc-500 caret-pink-500 outline-pink-500 focus:outline "
        />
        <button
          type="submit"
          className="text-white cursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};
