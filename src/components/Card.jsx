import { useState } from "react";
import FooterButtonSection, { SideLikeButton, TopReplyButton } from "./Buttons";
import Header from "./Header";
import PostContent from "./PostContent";

export const ReplyToCard = () => {
  <Card />;
  <ReplyCard />;
};

const Card = () => {
  const [likes, setLikes] = useState(0);
  return (
    <div className="flex justify-center items-center my-2">
      <div className="bg-white text-design-GrayishBlue grid grid-flow-col gap-4 p-4 w-[80%] content-center rounded-xl">
        <SideLikeButton likes={likes} setLikes={setLikes} />
        <div>
          <Header />
          <PostContent />
          <FooterButtonSection likes={likes} setLikes={setLikes} />
        </div>
      </div>
    </div>
  );
};

export const ReplyCard = () => {
  const [likes, setLikes] = useState(0);
  return (
    <>
      <div className="flex justify-center items-center relative my-4">
        <div className="absolute w-[2px] bg-design-LighGray h-[115%] right-[85%]" />
        <div className="bg-white text-design-GrayishBlue grid grid-flow-col gap-4 p-4 md:ml-[87px] ml-10 w-[70%] content-center rounded-xl">
          <SideLikeButton likes={likes} setLikes={setLikes} />
          <div>
            <Header />
            <PostContent />
            <FooterButtonSection likes={likes} setLikes={setLikes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
