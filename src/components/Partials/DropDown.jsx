import React from "react";

function DropDown({ handleChange, title, options, icon }) {
  return (
      <div className="hover:bg-zinc-700 flex items-center justify-center gap-2 px-4 py-1 rounded-sm text-zinc-300 w-full">
        {icon}
        <select
          onChange={handleChange}
          defaultValue={0}
          className="custom-select bg-transparent w-44 pr-2 border-none appearance-auto outline-none"
        >
          <option value="0" disabled className="hidden">
            {title}
          </option>
          {options.map((opt, index) => (
            <option
              className="custom-option bg-zinc-800 border-none outline-none"
              value={opt}
              key={index}
            >
              {opt.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
  );
}

export default DropDown;
