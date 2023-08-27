import Navbar from "./components/Navbar";
import ImageSection from "./components/ImageSection";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <>
      <div className={` ${showContent ? "fade-in" : ""}`}>
        <div>
          <Navbar />
        </div>
        <div className="items-center">
          <ImageSection />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
