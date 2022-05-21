import React from "react";

export const Chapters = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">{children}</div>
  );
};

export const ChapterItem = ({ value, date }) => {
  return (
    <div className="bg-slate-900/50 border border-slate-300/20 rounded-sm p-2 cursor-pointer hover:bg-slate-500/10 transition-all select-none ">
      <span>Ch.{value}</span>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
};
