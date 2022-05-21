import React from "react";

export const Comments = ({ children }) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};

export const CommentItem = ({
  name,
  date,
  comment,
  photo,
  likeamount,
  commentamount,
}) => {
  return (
    <div className=" pb-3">
      <div className="flex gap-3 ">
        <img
          src={photo}
          alt="Avatar"
          className="h-12 w-12 rounded-sm object-cover"
        />
        <div className="flex flex-col w-full">
          <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
      </div>
      <p className="mt-3">{comment}</p>

      <div className="flex gap-3 justify-end">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100/5 transition-all p-1 rounded-md">
          {likeamount}
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
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100/5 transition-all p-1 rounded-md">
          {commentamount}
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
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
