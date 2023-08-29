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
    <div className="container mx-auto px-4 md:px-4 mt-48 items-center">
      <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center mb-8 md:mb-0">
        <div className="overflow-hidden w-full md:w-72 h-96 cursor-pointer relative image-container md:mb-8">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
            <div className="bg-cardGrey h-full flex justify-center items-center">
              <div className=" border border-black m-4 py-40 px-32 btn">
                <div className="text-center noselect">
                  <h2 className="text-xl font-bold font-forum tracking-widest">
                    HORSE FARM
                  </h2>
                  <p className="font-sans text-sm font-light tracking-widest">
                    ROSWELL
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Image1}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96 cursor-pointer relative image-container md:mb-8">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
            <div className="bg-cardGrey h-full flex justify-center items-center ">
              <div className="border border-black m-4 py-40 px-32 btn">
                <div className="text-center noselect">
                  <h2 className="text-xl font-bold font-forum tracking-widest">
                    PERENNIAL OVERLOOK
                  </h2>
                  <p className="font-sans text-sm font-light tracking-widest">
                    MARIETTA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Image2}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96 cursor-pointer relative image-container md:mb-8">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
            <div className="bg-cardGrey h-full flex justify-center items-center ">
              <div className="border border-black m-4 py-40 px-32 btn">
                <div className="px-10 text-center noselect">
                  <h2 className="text-xl font-bold font-forum tracking-widest">
                    PIED A TERRE
                  </h2>
                  <p className="font-sans text-sm font-light tracking-widest">
                    BUCKHEAD
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Image3}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center mb-8 md:mb-0">
        <div className="overflow-hidden w-full md:w-72 h-96 cursor-pointer relative image-container md:mb-8">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
            <div className="bg-cardGrey h-full flex justify-center items-center ">
              <div className="border border-black m-4 py-40 px-32 btn">
                <div className="px-10 text-center noselect">
                  <h2 className="text-xl font-bold font-forum tracking-widest">
                    MORDERN COTTAGE
                  </h2>
                  <p className="font-sans text-sm font-light tracking-widest">
                    BROOKHAVEN
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Image4}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96 cursor-pointer relative image-container md:mb-8">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
            <div className="bg-cardGrey h-full flex justify-center items-center ">
              <div className="border border-black m-4 py-40 px-32 btn">
                <div className="px-10 text-center">
                  <h2 className="text-xl font-bold font-forum tracking-widest">
                    LAKEFRONT LEGACY
                  </h2>
                  <p className="font-sans text-sm font-light tracking-widest">
                    LAKE BURTON
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Image5}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96 cursor-pointer relative image-container md:mb-8">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
            <div className="bg-cardGrey h-full flex justify-center items-center ">
              <div className="border border-black m-4 py-40 px-32 btn">
                <div className="px-10 text-center noselect">
                  <h2 className="text-xl font-bold font-forum tracking-widest">
                    WATERFRONT RETREAT
                  </h2>
                  <p className="font-sans text-sm font-light tracking-widest">
                    LAKE BURTON
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Image6}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center mb-8 md:mb-0">
        <div className="overflow-hidden w-full md:w-72 h-96 cursor-pointer relative image-container md:mb-8">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
            <div className="bg-cardGrey h-full flex justify-center items-center ">
              <div className="border border-black m-4 py-40 px-32 btn">
                <div className="px-10 text-center noselect">
                  <h2 className="text-xl font-bold font-forum tracking-widest">
                    REDEFINED CLASSIC
                  </h2>
                  <p className="font-sans text-sm font-light tracking-widest">
                    ATLANTA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Image7}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96 cursor-pointer relative image-container md:mb-8">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
            <div className="bg-cardGrey h-full flex justify-center items-center ">
              <div className="border border-black m-4 py-40 px-32 btn">
                <div className="px-10 text-center noselect">
                  <h2 className="text-xl font-bold font-forum tracking-widest">
                    TREE TOPS
                  </h2>
                  <p className="font-sans text-sm font-light tracking-widest">
                    OGUNQUIT
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Image8}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96 cursor-pointer relative image-container md:mb-8">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
            <div className="bg-cardGrey h-full flex justify-center items-center ">
              <div className="border border-black m-4 py-40 px-32 btn">
                <div className="px-10 text-center noselect">
                  <h2 className="text-xl font-bold font-forum tracking-widest">
                    EAGLE PINES
                  </h2>
                  <p className="font-sans text-sm font-light tracking-widest">
                    ASPEN
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Image9}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-center items-center">
        <div className="overflow-hidden w-full md:w-72 h-96 cursor-pointer relative image-container md:mb-8">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
            <div className="bg-cardGrey h-full flex justify-center items-center ">
              <div className="border border-black m-4 py-40 px-32 btn">
                <div className="px-10 text-center noselect">
                  <h2 className="text-xl font-bold font-forum tracking-widest">
                    MORDERN WATERFRONT
                  </h2>
                  <p className="font-sans text-sm font-light tracking-widest">
                    VININGS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Image10}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96 cursor-pointer relative image-container md:mb-8">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
            <div className="bg-cardGrey h-full flex justify-center items-center ">
              <div className="border border-black m-4 py-40 px-32 btn">
                <div className="px-10 text-center noselect">
                  <h2 className="text-xl font-bold font-forum tracking-widest">
                    TUDOR REVIVAL
                  </h2>
                  <p className="font-sans text-sm font-light tracking-widest">
                    BUCKHEAD
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Image11}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden w-full md:w-72 h-96 cursor-pointer relative image-container md:mb-8">
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
            <div className="bg-cardGrey h-full flex justify-center items-center ">
              <div className="border border-black m-4 py-40 px-32 btn">
                <div className="px-10 text-center noselect">
                  <h2 className="text-xl font-bold font-forum tracking-widest">
                    SERENBE SHOWHOUSE
                  </h2>
                  <p className="font-sans text-sm font-light tracking-widest">
                    SERENBE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Image12}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
