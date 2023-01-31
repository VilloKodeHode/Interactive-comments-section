import FooterButtonSection, { SideLikeButton, TopReplyButton } from "./Buttons";
import Header from "./Header";
import PostContent from "./PostContent";

const Card = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white text-design-GrayishBlue grid grid-flow-col gap-4 p-4 w-[80%] content-center rounded-xl">
        <SideLikeButton />
        <div>
          <Header />
          <PostContent />
          <FooterButtonSection />
        </div>
      </div>
    </div>
  );
};

export const ReplyCard = () => {
  return (
    <div className="flex justify-center items-center m-auto">
      <div className="w-[23rem]">
        <div className="bg-white text-black grid grid-flow-row gap-4 p-4 rounded-xl">
          <Header />
          <PostContent />
          <FooterButtonSection />
        </div>
      </div>
    </div>
  );
};

export default Card;
