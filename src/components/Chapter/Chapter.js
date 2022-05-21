import React from "react";
import { ChapterItem, Chapters } from "./../Chapters/Chapters";

const Chapter = () => {
  return (
    <div className="pt-10 md:pt-16">
      <span className="text-primary font-sub">
        Find your favorite chapter here
      </span>
      <h3 className="text-xl font-semibold mb-2">Chapters</h3>

      {/* Chapter Container */}

      <Chapters>
        <ChapterItem value="1" date="Mar 17, 2022" />
        <ChapterItem value="2" date="Mar 18, 2022" />
        <ChapterItem value="3" date="Mar 19, 2022" />
        <ChapterItem value="4" date="Mar 20, 2022" />
        <ChapterItem value="5" date="Mar 21, 2022" />
        <ChapterItem value="6" date="Mar 21, 2022" />
        <ChapterItem value="7" date="Mar 21, 2022" />
        <ChapterItem value="8" date="Mar 21, 2022" />
        <ChapterItem value="9" date="Mar 21, 2022" />
        <ChapterItem value="10" date="Mar 21, 2022" />
        <ChapterItem value="11" date="Mar 21, 2022" />
        <ChapterItem value="12" date="Mar 21, 2022" />
      </Chapters>
    </div>
  );
};

export default Chapter;
