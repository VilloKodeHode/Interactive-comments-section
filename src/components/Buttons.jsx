import PLUS from "./images/icon-plus.svg";
import MINUS from "./images/icon-minus.svg";
import REPLY from "./images/icon-reply.svg";

const FooterButtonSection = () => {
  return (
    <div className="flex justify-between">
      <LikeButton />
      <ReplyButton />
    </div>
  );
};

export const ReplyButton = () => {
  return (
    <button className="flex items-center gap-2 text-blue-700 font-bold">
      <img src={REPLY} />
      <p>Reply</p>
    </button>
  );
};

export const LikeButton = () => {
  return (
    <div className="flex text-gray-300 gap-4 p-2 rounded-xl bg-gray-400">
      <button>
        <img src={PLUS} />
      </button>
      0
      <button>
        <img src={MINUS} />
      </button>
    </div>
  );
};

export default FooterButtonSection;
