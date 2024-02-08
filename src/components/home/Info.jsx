import React from "react";
import { FaTruck,FaUndoAlt  } from "react-icons/fa";

const Info = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-between">

        <div className="flex items-center gap-2">
          <h3 className="text-primary text-lg">2</h3>
          <p className="text-base text-brandOne">Two years warranty</p>
        </div>

        <div className="flex items-center gap-2">
          <FaTruck size={20}/>
          <p className="text-base text-brandOne">Free shipping</p>
        </div>

        <div className="flex items-center gap-2">
          <FaUndoAlt  size={20}/>
          <p className="text-base text-brandOne">Return policy in 30 days</p>
        </div>

      </div>
    </div>
  );
};

export default Info;
