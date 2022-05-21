import React from "react";

export const Tags = ({ children }) => {
  return <div className="flex gap-2 flex-wrap">{children}</div>;
};

export const TagItem = ({ children }) => {
  return (
    <div className="bg-slate-900/50 border border-slate-300/20 rounded-md px-2 cursor-pointer hover:bg-slate-500/10 transition-all select-none">
      {children}
    </div>
  );
};
