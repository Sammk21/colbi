import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
const DrodownContent = ({ items }) => {
  const [checkedIndex, setCheckedIndex] = useState(-1);

  const handleIsChecked = (index) => {
    if (checkedIndex === index) {
      // Uncheck the item
      setCheckedIndex(-1);
    } else {
      // Check the item
      setCheckedIndex(index);
    }
  };

  return (
    <>
      <div className="w-[80vw] ">
        <ul className="overflow-hidden ">
          {items.map((items, index) => (
            <div>
              <span
                className="flex items-center gap-2 w-[auto] cursor-pointer"
                onClick={() => handleIsChecked(index)}
              >
                {checkedIndex === index && <BsCheckLg />}
                <p key={index} className="">
                  {items.title}
                </p>
              </span>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DrodownContent;
