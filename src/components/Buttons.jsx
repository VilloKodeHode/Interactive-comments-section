import PLUS from "./images/icon-plus.svg";
import MINUS from "./images/icon-minus.svg";
import REPLY from "./images/icon-reply.svg";

const FooterButtonSection = ({ likes, setLikes }) => {
  return (
    <div className="flex justify-between">
      <BottomLikeButton likes={likes} setLikes={setLikes} />
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

export const BottomLikeButton = ({ likes, setLikes }) => {
  return (
    <div className="md:hidden flex text-design-ModerateBlue gap-4 p-2 rounded-xl bg-design-LighGray">
      <button onClick={() => setLikes((prevLikes) => prevLikes + 1)}>
        <img src={PLUS} />
      </button>
      <p className="font-semibold h-5">{likes}</p>
      <button onClick={() => setLikes((prevLikes) => prevLikes - 1)}>
        <img src={MINUS} />
      </button>
    </div>
  );
};

export const SideLikeButton = ({ likes, setLikes }) => {
  return (
    <div className="md:flex hidden flex-col justify-center items-center my-6">
      <div className="px-3 text-design-ModerateBlue gap-4 p-2 rounded-xl bg-design-LighGray">
        <button onClick={() => setLikes((prevLikes) => prevLikes + 1)}>
          <img src={PLUS} />
        </button>
        <p className="font-semibold h-5">{likes}</p>
        <button onClick={() => setLikes((prevLikes) => prevLikes - 1)}>
          <img src={MINUS} />
        </button>
      </div>
    </div>
  );
};

export default FooterButtonSection;
