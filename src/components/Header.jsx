import { TopReplyButton } from "./Buttons";
import AMYPNG from "./images/avatars/image-amyrobson.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-8">
          <img className="h-12" src={AMYPNG} />
          <p className="w-fit font-bold text-design-DarkBlue">Name</p>
          <p className="w-fit">Date posted</p>
        </div>
        <TopReplyButton />
      </div>
    </>
  );
};

export default Header;
