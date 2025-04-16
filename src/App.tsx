import "./App.css";
import Hero from "./components/Hero";
import ShortenerList from "./components/ShortenerList";
import UrlShortener from "./components/UrlShortener";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col relative">
        <div className="w-full h-[40%] bg-sky-200"></div>
        <div className="w-full h-[60%] bg-sky-300"></div>
        <div className="w-full h-screen absolute top-0 left-0">
          <Hero />
          <UrlShortener />
          <ShortenerList />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
