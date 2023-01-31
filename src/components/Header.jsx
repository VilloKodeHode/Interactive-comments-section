import AMYPNG from "./images/avatars/image-amyrobson.png";

const Header = () => {
  return (
    <div className="flex items-center gap-8">
      <img className="h-12" src={AMYPNG} />
      <p className="w-fit font-bold">Name</p>
      <p className="w-fit">Date posted</p>
    </div>
  );
};

export default Header;
