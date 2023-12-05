import Navbar from "../Components/NavbarItems/Navbar";
import FashionFeature from "../Components/Fashions/FashionFeature";
import HomeMain from "../Components/HomeMain/HomeMain";
import Hero from "../Components/HeroSection/Hero";
import home_cover from "../Components/Assets/Hero/home_cover_1.jpg";
function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg={home_cover}
        text="Your Choice to Online Purchase"
        title="RK FASHIONS & JEWELRY"
        buttonText="Explore RK Fashions"
        url="/about"
        btnClass="show"
      />
      <HomeMain />
      <FashionFeature />
    </>
  );
}

export default Home;
