import Image1 from "../assets/Images/design-1.jpg";
import Image2 from "../assets/Images/design-2.jpg";
import Image3 from "../assets/Images/design-3.jpg";
import Image4 from "../assets/Images/design-4.jpg";
import Image5 from "../assets/Images/design-5.jpg";
import Image6 from "../assets/Images/design-6.jpg";
import Image7 from "../assets/Images/design-7.jpg";
import Image8 from "../assets/Images/design-8.jpg";
import Image9 from "../assets/Images/design-9.jpg";
import Image10 from "../assets/Images/design-10.jpg";
import Image11 from "../assets/Images/design-11.jpg";
import Image12 from "../assets/Images/design-12.jpg";

const ImageSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-4 my-36 items-center">
      <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center">
        <div className="overflow-hidden w-full md:w-72 h-96">
          <img src={Image1} alt={Image1} className="w-full h-full" />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96">
          <img src={Image2} alt={Image2} className="w-full h-full" />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96">
          <img src={Image3} alt={Image3} className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center mt-8">
        <div className="overflow-hidden w-full md:w-72 h-96">
          <img src={Image4} alt={Image4} className="w-full h-full" />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96">
          <img src={Image5} alt={Image5} className="w-full h-full" />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96">
          <img src={Image6} alt={Image6} className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center mt-8">
        <div className="overflow-hidden w-full md:w-72 h-96">
          <img src={Image7} alt={Image7} className="w-full h-full" />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96">
          <img src={Image8} alt={Image8} className="w-full h-full" />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96">
          <img src={Image9} alt={Image9} className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center my-8">
        <div className="overflow-hidden w-full md:w-72 h-96">
          <img src={Image10} alt={Image10} className="w-full h-full" />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96">
          <img src={Image11} alt={Image11} className="w-full h-full" />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96">
          <img src={Image12} alt={Image12} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
