import Navbar from "../Components/NavbarItems/Navbar";
import HeroOther from "../Components/HeroSection/HeroOther";
import Footer from "../Components/FooterItems/Footer";
import childrenCoverPic from "../Components/Assets/Fashions/Children/ChildrenPageCoverPic.jpg";
import ChildrenSection from "../Components/ChildrenSection/ChildrenSection";

function Payment() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-children"
        heroImg={childrenCoverPic}
        titleOther="Children Section"
        btnClass="hide"
      />
      <ChildrenSection />
      <Footer />
    </>
  );
}

export default Payment;
