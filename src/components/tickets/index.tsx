import { FC } from "react";

export const Tickets: FC = () => {
  return (
    <div className="mt-20 w-full flex flex-col pb-32">
      <h2 className="pb-0.5 text-3xl font-bold">Tickets</h2>
      <div className="flex flex-col items-center w-full">
        <table className="mt-5 table border border-color border-collapse w-full">
          <thead className="text-lg font-bold ">
            <tr className="border border-zinc-500 p-3">
              <th>Tickets</th>
            </tr>
            <tr className="border border-zinc-500 p-3">
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-500 py-2 px-3">
                Single day tickets
              </td>
              <td className="border border-zinc-500 py-2 px-3">$30</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 py-2 px-3">
                7 day tickets
              </td>
              <td className="border border-zinc-500 py-2 px-3">$100</td>
            </tr>
          </tbody>
        </table>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
    </div>
  );
};
