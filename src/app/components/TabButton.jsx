import React from "react";

function TabButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? "text-white border-b border-blue-600"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 md:text-sm font-semibold hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
}

export default TabButton;
