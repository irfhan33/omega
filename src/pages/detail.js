import React from "react";
import Chapter from "../components/Chapter/Chapter";
import Information from "./../components/Infomration/Information";
import Comment from "./../components/Comment/Comment";

const detail = () => {
  return (
    <div className="max-w-6xl mx-auto min-h-screen py-5 md:py-10 px-5">
      <Information />
      <Chapter />
      <Comment />
    </div>
  );
};

export default detail;
