import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Message from "./components/Message";
import Detail from "./components/Details";
import RecycleMessage from "./components/RecycleMessage";
import BemoMsg from "./components/BemoMsg";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <Header />
      <Message />
      <hr className="h-[2px] bg-[#ccc]" />
      <Detail />
      <RecycleMessage />
      <BemoMsg />
      <Footer />
    </>
  );
}

export default App;
