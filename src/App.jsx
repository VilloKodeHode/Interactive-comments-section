import "./App.css";

//images

import FooterButtonSection, { BottomReplyButton } from "./components/Buttons";
import Card, { ReplyCard } from "./components/Card";
import Header from "./components/Header";
import PostContent from "./components/PostContent";

function App() {
  return (
    <>
      <div className="grid w-screen grid-flow-row">
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
