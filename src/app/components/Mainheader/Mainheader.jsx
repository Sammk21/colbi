import React from "react";
import Readmore from "../../smallComponents/Readmore";
const InfoHeader = ({ paragraph }) => {
  const paragraphh =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aperiam, doloribus quaerat tenetur consectetur, accusantium provident cum sint vero odio, incidunt suscipit obcaecati iusto.";

  return (
    <>
      <div className=" flex justify-center flex-col">
        <div className=" w-[90vw] mx-auto mb-4 mt-7 flex justify-center uppercase">
          <h1 className="font-bold tracking-tight text-gray-900 text-5xl">
            Shirt{"'"}s
          </h1>
        </div>
        <Readmore text={paragraphh} maxLength={100} />
      </div>
    </>
  );
};

export default InfoHeader;
