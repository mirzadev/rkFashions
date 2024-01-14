import Navbar from "../Components/NavbarItems/Navbar";
import HeroOther from "../Components/HeroSection/HeroOther";
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
    </>
  );
}

export default Jewelry;
