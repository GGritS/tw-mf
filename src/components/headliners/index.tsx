import { FC } from "react";

const BANDS = [
  { title: "Corduroy Gary", imageUrl: "band_1" },
  { title: "Corduroy Gary", imageUrl: "band_2" },
  { title: "Corduroy Gary", imageUrl: "band_3" },
  { title: "Corduroy Gary", imageUrl: "band_4" },
  { title: "Corduroy Gary", imageUrl: "band_5" },
  { title: "Corduroy Gary", imageUrl: "band_5" },
  { title: "Corduroy Gary", imageUrl: "band_6" },
];

export const Headliners: FC = () => {
  return (
    <div className="pt-20  text-black dark:text-white">
      <h2 className="text-5xl font-bold">Headliners</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic
        at reiciendis cupiditate, exercitationem commodi numquam quasi debitis
        laborum impedit molestias fuga?
      </p>
      <div className="mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto">
        {BANDS.map((band, index) => (
          <div className="min-w-[80%] md:min-w-[40%]" key={index}>
            <div
              className={`${band.imageUrl} h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-back/20`}
            />
            <h5 className="mt-2 text-2xl font-bold">{band.title}</h5>
            <h6 className="text-xl font-bold">Lorem ipsum dolor sit amet.</h6>
          </div>
        ))}
      </div>
    </div>
  );
};
