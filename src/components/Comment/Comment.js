import React, { useState } from "react";
import { CommentItem, Comments } from "./../Comments/Comments";
import Picker from "emoji-picker-react";

const Comment = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [input, setInput] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setInput(input + chosenEmoji.emoji);
  };

  const toggleTab = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="pt-10 md:pt-16">
      <span className="text-primary font-sub">What your thoughts?</span>
      <h3 className="text-xl font-semibold mb-2">Comments</h3>

      {/* Post a comment */}
      <div className="flex gap-3 mb-8">
        <img
          src="/images/default-ava.jpg"
          alt="Avatar"
          className="h-12 w-12 rounded-sm object-cover"
        />
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-3">
            <textarea
              type="area"
              placeholder="Enter Comment"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="block w-full text-sm bg-slate-900/50 border border-slate-300/20 rounded-sm focus:outline-none p-3 focus:border-primary transition-all outline-none h-40 resize-none"
            />
            <div className="w-full">
              <div className="h-40 bg-slate-900/50 border border-slate-300/20 rounded-sm flex flex-col">
                {/* Tab Header */}
                <div className="flex text-sm ">
                  <button
                    className={`flex grow justify-center rounded-sm h-10 items-center cursor-pointer ${
                      activeIndex === 1
                        ? "bg-slate-500/10 border-b-2 border-primary"
                        : "border border-slate-300/20    hover:bg-slate-500/10"
                    }`}
                    onClick={() => toggleTab(1)}
                  >
                    Emoji
                  </button>
                  <button
                    className={`flex grow justify-center rounded-sm h-10 items-center cursor-pointer ${
                      activeIndex === 2
                        ? "bg-slate-500/10 border-b-2 border-primary"
                        : "border border-slate-300/20    hover:bg-slate-500/10"
                    }`}
                    onClick={() => toggleTab(2)}
                  >
                    Gif
                  </button>
                </div>
                {/* Tab Content */}

                <div
                  className={`w-full ${
                    activeIndex === 1 ? "flex" : "hidden"
                  } grow relative overflow-hidden`}
                >
                  <Picker
                    onEmojiClick={onEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                    groupVisibility={{
                      flags: false,
                      animals_nature: false,
                      food_drink: false,
                      travel_places: false,
                      activities: false,
                      objects: false,
                      symbols: false,
                      recently_used: false,
                    }}
                    pickerStyle={{
                      width: "100%",
                      height: "100%",
                      background: "transparent",
                      border: "none",
                      borderRadius: "0px",
                    }}
                  />
                </div>
                <div
                  className={`w-full ${
                    activeIndex === 2 ? "flex" : "hidden"
                  } grow p-2`}
                >
                  This is gif
                </div>
              </div>
            </div>
          </div>
          <button className="bg-primary px-4 py-2 rounded-sm hover:bg-primary/70 transition-all flex items-center ml-auto gap-2 mt-3">
            Send Post
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="rotate-90 block w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Comments */}

      <Comments>
        <CommentItem
          name="Irfan"
          date="3 minutes ago"
          comment="This is great!!!!"
          photo="/images/default-ava.jpg"
          likeamount="32"
          commentamount="10"
        />
        <CommentItem
          name="Todoroki"
          date="6 hours ago"
          comment="oh naw someone pls kill that guy he's not even fighting he's just detonating bombs 💀"
          photo="/images/default-ava2.jpg"
          likeamount="33"
          commentamount="12"
        />
        <CommentItem
          name="Asta"
          date="3 days ago"
          comment="wait omg his hair is blue not orange!?!?!?"
          photo="/images/default-ava3.jpg"
          likeamount="12"
          commentamount="14"
        />
        <CommentItem
          name="Yuno"
          date="5 days ago"
          comment="holy shit what"
          photo="/images/default-ava4.jpg"
          likeamount="32"
          commentamount="10"
        />
        <CommentItem
          name="Yami"
          date="7 days ago"
          comment="Did Koichi just become a regular super hero? If that's the case, I hope he appears in the main series"
          photo="/images/default-ava5.jpg"
          likeamount="92"
          commentamount="50"
        />
      </Comments>
    </div>
  );
};

export default Comment;
