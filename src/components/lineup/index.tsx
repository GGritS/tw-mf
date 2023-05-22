import { FC } from "react";

export const Lineup: FC = () => {
  return (
    <>
      <h2 className="mt-20 text-3xl font-bold">Lineup</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
        eligendi aliquid reiciendis vel harum repudiandae?
      </p>
      <div className="mt-5 bg-zinc-800 py-4 px-2 text-zinc-200 relative rounded-lg">
        <div className="absolute top-0 left-1/2 w-4 -ml-[8px] h-full rounded-full  bg-gradient-to-b from-sky-900 to-teal-900 via-cyan-900">
          <div className="sticky top-1/2">
            <div className="relative h-4 w-4">
              <div className="absolute h-4 w-4 animate-ping rounded-full bg-pink-500 opacity-75"></div>
              <div className="bg-rose-500 rounded-full h-4 w-4"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 ">
          <div>
            <h4 className="text-2xl font-bold p-2 bg-zinc-900 rounded-lg my-4">
              1st July
            </h4>
          </div>
          <div></div>
          <div className="text-right ">
            <div className="font-bold">Jackie Chaston</div>
            <div className="text-zinc-400">6pm - Sage Stage</div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="font-bold">Jackie Chaston</div>
            <div className="text-zinc-400">6pm - Sage Stage</div>
          </div>
          <div>
            <h4 className="text-2xl font-bold p-2 bg-zinc-900 rounded-lg my-4">
              1st July
            </h4>
          </div>
          <div></div>
          <div className="text-right ">
            <div className="font-bold">Jackie Chaston</div>
            <div className="text-zinc-400">6pm - Sage Stage</div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div className="font-bold">Jackie Chaston</div>
            <div className="text-zinc-400">6pm - Sage Stage</div>
          </div>
        </div>
      </div>
    </>
  );
};
