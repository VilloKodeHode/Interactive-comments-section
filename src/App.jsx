import "./App.css";

//images

import FooterButtonSection, { ReplyButton } from "./components/Buttons";
import Card, { ReplyCard } from "./components/Card";
import Header from "./components/Header";
import PostContent from "./components/PostContent";

function App() {
  return (
    <>
      <div className="grid w-full grid-flow-row gap-12">
        <Card />
        <ReplyCard />
        <Card />
        <ReplyCard />
        <ReplyCard />
        <Card />
      </div>
    </>
  );
}

export default App;
