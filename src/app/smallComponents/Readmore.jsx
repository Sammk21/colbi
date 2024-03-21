import React, { useState } from "react";

const Readmore = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };
  return (
    <div className="mx-auto my-4 flex justify-center flex-col">
      <p className="md:w-[40vw] w-[70vw]  text-sm text-gray-700">
        {showFullText ? text : text.slice(0, maxLength)}
      </p>
      {text.length > maxLength && !showFullText && (
        <span
          onClick={toggleReadMore}
          className="text-xs cursor-pointer underline color-black  hover:no-underline transition w-fit"
        >
          Read More
        </span>
      )}
      {showFullText && text.length > maxLength && (
        <span
          onClick={toggleReadMore}
          className="cursor-pointer underline color-black  hover:no-underline transition text-xs w-fit"
        >
          {" "}
          Read Less
        </span>
      )}
    </div>
  );
};

export default Readmore;
