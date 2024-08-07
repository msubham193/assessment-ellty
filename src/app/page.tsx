"use client";
import { useState } from "react";

type Page = {
  title: string;
  isChecked: boolean;
};

export default function Home() {
  const [pages, setPages] = useState<Page[]>([
    { title: "Page 1", isChecked: false },
    { title: "Page 2", isChecked: false },
    { title: "Page 3", isChecked: false },
    { title: "Page 4", isChecked: false },
    { title: "Page 5", isChecked: false },
    { title: "Page 6", isChecked: false },
  ]);

  const [allChecked, setAllChecked] = useState(false);

  const handleAllChecked = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setPages(pages.map((page) => ({ ...page, isChecked: newCheckedState })));
  };
  const handleIndividualChecked = (index: number) => {
    const updatedPages = [...pages];
    updatedPages[index].isChecked = !updatedPages[index].isChecked;
    setPages(updatedPages);

    const allAreChecked = updatedPages.every((page) => page.isChecked);
    setAllChecked(allAreChecked);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="shadow-custom-all rounded-lg h-fit p-5 w-[370px]">
        <div
          className="flex justify-between items-center h-[42px] cursor-pointer"
          onClick={handleAllChecked}
        >
          <span className="text-sm">All pages</span>
          <input
            type="checkbox"
            className="h-[22px] w-[22px] rounded-md cursor-pointer"
            checked={allChecked}
            onChange={handleAllChecked}
          />
        </div>

        <hr className="my-2 px-4 flex items-center justify-center" />

        <div className="overflow-y-scroll h-[164px] ">
          {pages.map((page, index) => (
            <div
              key={index}
              className="flex justify-between items-center h-[42px] cursor-pointer"
              onClick={() => handleIndividualChecked(index)}
            >
              <span className="text-sm">{page.title}</span>
              <input
                type="checkbox"
                className="h-[22px] w-[22px] rounded-xl cursor-pointer"
                checked={page.isChecked}
                // onChange={() => handleIndividualChecked(index)}
              />
            </div>
          ))}
        </div>

        <hr className="my-2 px-4 flex items-center justify-center" />

        <button className="w-full h-[40px] bg-[#FFCE22] hover:bg-[#FFD84D] rounded-md mt-3 mb-2">
          Done
        </button>
      </div>
    </div>
  );
}
