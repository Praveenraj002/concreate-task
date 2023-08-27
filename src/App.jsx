import Navbar from "./components/Navbar";
import ImageSection from "./components/ImageSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="transition-all">
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
