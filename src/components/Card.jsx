import FooterButtonSection from "./Buttons";
import Header from "./Header";
import PostContent from "./PostContent";

const Card = () => {
  return (
    <div className="flex justify-center items-center m-auto">
      <div className="w-fit">
        <div className="bg-white text-black grid grid-flow-row gap-4 p-4 rounded-xl">
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
