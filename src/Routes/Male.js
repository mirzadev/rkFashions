import Navbar from "../Components/NavbarItems/Navbar";
import HeroOther from "../Components/HeroSection/HeroOther";
import Footer from "../Components/FooterItems/Footer";
import maleCoverPic from "../Components/Assets/Fashions/Male/MaleCoverPic.jpg";
import MaleSection from "../Components/MaleSection/MaleSection";

function Male() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-male"
        heroImg={maleCoverPic}
        titleOther="Male Section"
        btnClass="hide"
      />
      <MaleSection />
      <Footer />
    </>
  );
}

export default Male;
