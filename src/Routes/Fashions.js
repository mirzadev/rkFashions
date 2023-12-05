import Navbar from "../Components/NavbarItems/Navbar";
import HeroOther from "../Components/HeroSection/HeroOther";
import fashionCoverPic from "../Components/Assets/Fashions/FashionsPageCoverPic.jpg";
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
    </>
  );
}

export default Fashions;
