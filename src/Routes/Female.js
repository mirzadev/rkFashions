import Navbar from "../Components/NavbarItems/Navbar";
import HeroOther from "../Components/HeroSection/HeroOther";
import Footer from "../Components/FooterItems/Footer";
import femaleCoverPic from "../Components/Assets/Fashions/Female/FemaleCoverPic.jpg";
import FemaleSection from "../Components/FemaleSection/FemaleSection";

function Female() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-female"
        heroImg={femaleCoverPic}
        titleOther="Female Section"
        btnClass="hide"
      />
      <FemaleSection />
      <Footer />
    </>
  );
}

export default Female;
