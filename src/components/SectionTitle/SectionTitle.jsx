import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-yellow-500 font-semibold text-xl mb-2">
        ---{subHeading}---
      </p>
      <h2 className="text-4xl uppercase border-y-4 py-6">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
