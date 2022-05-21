import React from "react";
import { TagItem, Tags } from "../Tags/Tags";

const Information = () => {
  return (
    <div className="rounded-md border border-gray-200 p-3 md:p-8 relative overflow-hidden z-[0] flex gap-5 flex-col md:flex-row">
      {/* Background Image */}
      <div className="bg-[url('../public/images/black-clover.jpg')] bg-no-repeat bg-center bg-cover bg-opacity-0 absolute w-full h-full top-0 left-0 z-[-1] opacity-5 grayscale"></div>

      {/* Cover Image */}
      <div className=" md:aspect-[2/3] md:max-w-[220px] shrink-0 bg-red-300 h-56 md:h-auto">
        <img
          src="/images/black-clover.jpg"
          alt="Poster Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Information */}
      <div className="gap-3 flex-col flex">
        <h1 className="text-2xl font-semibold">
          Black Clover Gaiden: Quartet Knights
        </h1>
        <Tags>
          <TagItem>Action</TagItem>
          <TagItem>Adventure</TagItem>
          <TagItem>Comedy</TagItem>
          <TagItem>Drama</TagItem>
          <TagItem>Fantasy</TagItem>
        </Tags>
        <p>
          Its black clover spin off form shonen jump + the story based on the
          black clover ps4 and pc game quartet knights by Yumiya Tashiro of
          Night King and Dragon’s Dogma Revives fame! Yami Sukehiro, the captain
          of Asta’s knight order, the Black Bulls, suddenly grows younger, just
          as a mysterious mage launches an attack on the Clover Kingdom. Join
          Asta and his friends as they embark on a new adventure of trials and
          tribulations.
        </p>
        <div className="flex mt-auto gap-3 justify-center md:justify-start">
          <button className="bg-primary sm:px-4 sm:py-2 rounded-sm hover:bg-primary/70 transition-all p-2 whitespace-nowrap">
            Read First
          </button>
          <button className="text-primary sm:px-4 sm:py-2 rounded-sm flex gap-1 md:gap-2 border border-primary hover:bg-black/20 transition-all items-center p-2 whitespace-nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add to library
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
