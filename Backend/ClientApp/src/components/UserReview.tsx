import React, { useEffect, useState } from "react";

const Post = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex align-middle justify-center">
      <div className="  p-5 shadow-md w-10/12 flex flex-row  ">
        <div className="h-16 w-16 rounded-full bg-slate-400 mr-4 "></div>
        <div className=" flex flex-col w-full">
            <div className="flex w-full items-center justify-between border-b pb-3">
              <div className="flex items-center space-x-3">
                <div className="text-lg font-bold text-slate-200">legenda</div>
              </div>
              <div className="flex items-center space-x-8 ">fsdfdsfs</div>
            </div>
            <div className="mt-4 ">
              
              <div className="text-sm text-neutral-100">dsfsdfsdfsdfsdfsd</div>
            </div>
                  </div>
        </div>
    </div>
  );
};

export default Post;
