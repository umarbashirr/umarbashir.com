import React from "react";

const PrimaryButton = ({ label, type }: { label: string; type: any }) => {
  return (
    <button
      type={type}
      className="bg-secondary-color border-2 border-transparent hover:bg-transparent hover:border-secondary-color hover:text-secondary-color px-6 py-2 capitalize text-white font-semibold rounded-md shadow-md inline-flex"
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
