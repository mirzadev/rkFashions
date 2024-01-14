import Navbar from "../Components/NavbarItems/Navbar";
import HeroOther from "../Components/HeroSection/HeroOther";
import Footer from "../Components/FooterItems/Footer";
import paymentCoverPic from "../Components/Assets/Payment/PaymentCoverPic.jpg";
import PaymentFeature from "../Components/PaymentFeature/PaymentFeature";

function Payment() {
  return (
    <>
      <Navbar />
      <HeroOther
        cName="hero-payment"
        heroImg={paymentCoverPic}
        titleOther="Payments"
        btnClass="hide"
      />
      <PaymentFeature />
      <Footer />
    </>
  );
}

export default Payment;
