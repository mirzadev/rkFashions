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
          text="Karigor celebrates Pohela Boishakh Every Year which is first day of Bengali New Year. The program is organized in a style that gives same flavour like Bangladesh."
          url="/boishakh"
        />

        <HomeData
          image={HomeMenu2}
          heading="Male Fashions"
          text="Karigor production organizes reality talk show with the Bangladeshi origin nationals from different professions and who are very successful in their own career."
          url="/ekCupCha"
        />

        <HomeData
          image={HomeMenu3}
          heading="Children Fashions"
          text="Karigor organizes different cultural events including Anando Mela, Drama, Musical Events or Picnics - where all are very popular to the Bangladeshi community."
          url="/kpCulture"
        />

        <HomeData
          image={HomeMenu4}
          heading="Jewelry"
          text="Karigor telecasts news that always shows the updated information for Bangladeshi covering local, national or international events related to Bangladeshi community."
          url="/kpNews"
        />
      </div>
    </div>
  );
}

export default FashionFeature;
