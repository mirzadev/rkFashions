import "./Fashions.Styles.css";
import HomeData from "./FashionData";
import HomeMenu1 from "../Assets/HomeEvent/Female_Fashion_Home_Page.jpg";
import HomeMenu2 from "../Assets/HomeEvent/Male_Fashion_Home_Page.jpg";
import HomeMenu3 from "../Assets/HomeEvent/Child_Fashion_Home_Page.jpg";
import HomeMenu4 from "../Assets/HomeEvent/Fashion_Jewelry_Home_Page.jpg";
function FashionFeature() {
  return (
    <div className="home-event">
      <h1>RK Features</h1>
      <p>Navigate to RK Features You Want</p>
      <div className="home-event-cart">
        <HomeData
          image={HomeMenu1}
          heading="Female Fashions"
          text="Female section mainly deals with female's wear covering
          latest and most updated designs.
          RK Fashions have variety of collection covering - Sharees, T-Shirt, Salwar
          Kameez, Pants and shirts."
          url="/boishakh"
        />

        <HomeData
          image={HomeMenu2}
          heading="Male Fashions"
          text="Man section mainly deals with man’s wear covering latest and
          most updated designs. RK Fashions and Jewelry have
          variety of collection covering - Shirt, trousers, Panjabi, Fatua to choose."
          url="/ekCupCha"
        />

        <HomeData
          image={HomeMenu3}
          heading="Children Fashions"
          text="Girls section completely deals with girls's wear those are of latest
          and updated designs. We
          have variety of collection covering - Panjabees, T-Shirt, Salwar Kameez, Pants
          and shirts."
          url="/kpCulture"
        />

        <HomeData
          image={HomeMenu4}
          heading="Jewelry"
          text="RK Fashions has a large collection of Jewelry fashionable items that matches your dress. These are mainly imitation jewelry that looks like gold or dimond but price are affordable."
          url="/kpNews"
        />
      </div>
    </div>
  );
}

export default FashionFeature;
