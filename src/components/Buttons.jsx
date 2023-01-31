import PLUS from "./images/icon-plus.svg";
import MINUS from "./images/icon-minus.svg";
import REPLY from "./images/icon-reply.svg";

const FooterButtonSection = () => {
  return (
    <div className="flex justify-between">
      <BottomLikeButton />
      <BottomReplyButton />
    </div>
  );
};

export const BottomReplyButton = () => {
  return (
    <button className="flex md:hidden items-center gap-2 text-design-ModerateBlue font-bold">
      <img src={REPLY} />
      <p>Reply</p>
    </button>
  );
};

export const TopReplyButton = () => {
  return (
    <button className=" md:flex hidden items-center gap-2 text-design-ModerateBlue font-bold">
      <img src={REPLY} />
      <p>Reply</p>
    </button>
  );
};

export const BottomLikeButton = () => {
  return (
    <div className="md:hidden flex text-design-ModerateBlue gap-4 p-2 rounded-xl bg-design-LighGray">
      <button>
        <img src={PLUS} />
      </button>
      <p className="font-semibold">12</p>
      <button>
        <img src={MINUS} />
      </button>
    </div>
  );
};

export const SideLikeButton = () => {
  return (
    <div className="md:flex hidden flex-col justify-center items-center my-6 px-3 text-design-ModerateBlue gap-4 p-2 rounded-xl bg-design-LighGray">
      <button>
        <img src={PLUS} />
      </button>
      <p className="font-semibold">12</p>
      <button>
        <img src={MINUS} />
      </button>
    </div>
  );
};

export default FooterButtonSection;
