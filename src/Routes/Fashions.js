import Navbar from "../Components/NavbarItems/Navbar";
import HeroOther from "../Components/HeroSection/HeroOther";
import Footer from "../Components/FooterItems/Footer";
import fashionCoverPic from "../Components/Assets/Fashions/FashionCoverPic.jpg";
import FashionFeature from "../Components/Fashions/FashionFeature";

function Fashions() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-event"
        heroImg={fashionCoverPic}
        titleOther="RK Fashions"
        btnClass="hide"
      />
      <FashionFeature />
      <Footer />
    </>
  );
}

export default Fashions;
