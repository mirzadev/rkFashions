import Navbar from "../Components/NavbarItems/Navbar";
import HeroOther from "../Components/HeroSection/HeroOther";
import Footer from "../Components/FooterItems/Footer";
import jewelryCoverPic from "../Components/Assets/Jewelry/JewelryCoverPic-1.jpg";
import JewelryFeature from "../Components/JewelryItems/JewelryFeature";

function Jewelry() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-jewelry"
        heroImg={jewelryCoverPic}
        titleOther="RK Jewelry"
        btnClass="hide"
      />
      <JewelryFeature />
      <Footer />
    </>
  );
}

export default Jewelry;
