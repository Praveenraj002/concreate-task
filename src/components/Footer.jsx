import footer from "../assets/Images/footer.png";

const Footer = () => {
  return (
    <div className="hidden md:flex items-center justify-center">
      <img
        src={footer}
        alt="footer"
        className="justify-center items-center text-center"
      />
    </div>
  );
};

export default Footer;
