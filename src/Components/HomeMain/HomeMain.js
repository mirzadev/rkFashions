import "./HomeMainStyles.css";
import HomeMainData from "./HomeMainData";
import homeMain_1 from "../Assets/Home/RKMain1.jpg";
import homeMain_2 from "../Assets/Home/RKMain-2.jpg";
import homeMain_3 from "../Assets/Home/RKMain-3.jpg";
import RKFashion_1 from "../Assets/Home/RKFashion-1.jpg";
import RKFashion_2 from "../Assets/Home/RKFashion-2.jpg";
import RKFashion_3 from "../Assets/Home/RKFashion-3.jpg";
import RKFashion_4 from "../Assets/Home/RKFashion-4.jpg";
import RKFashion_5 from "../Assets/Home/RKFashion-5.jpg";
import RKJewelry_1 from "../Assets/Home/RKJewelry-1.jpg";
import RKJewelry_2 from "../Assets/Home/RKJewelry-2.jpg";
import RKJewelry_3 from "../Assets/Home/RKJewelry-3.jpg";
import RKJewelry_4 from "../Assets/Home/RKJewelry-4.jpg";
const HomeMain = () => {
  return (
    <div className="HomeMain">
      <h1>What is RK Fashions</h1>
      <p>A promising corporation that leads in Fashion and Jewelry industry</p>
      <HomeMainData
        heading="RK Fashions & Jewelry"
        text="RK Production and Cultural Society is a cultural organization and a production house located in West Palm Beach, Florida, USA. Since inception, the organization is dedicated to upholding the cultural heritage of Bangladesh in US soil. Members of RK come from different social, educational, religion and age backgrounds. One of the main aims of this organization is to keep our future generation updated about the cultural diversity of Bangladesh. Every year with the generous assistance of Bangladeshi community, Bengali new year festival 'Pohela Boishakh' is arranged."
        img1={homeMain_1}
        img2={homeMain_2}
        img3={homeMain_3}
      />

      <div className="fashion-des">
        <div className="fashion-image">
          <div>
            <img alt="img" src={RKFashion_1} />
          </div>
        </div>
        <div className="fashion-text">
          <h2>RK Fashion - General</h2>
          <p>
            RK Production started its journey with culturally reach 5 young and
            energetic members of Bangladeshi community name - Tipu, Rony, Anik,
            Rocky and Shaikh. After glorious victory of Bangladesh Cricket team
            in 2014, RK produced their first promo - Bangladesh World Cup Flash
            Mob and then a short film - Unlimited Shoe where both were highly
            appreciated by the community people. This greatly inspired the RK
            members to work more and produce some dramas like Onir Golpo,
            advertisement for all Bangladeshi organizations, Anando Mela, and
            few successful cultural programs. advertisement for all Bangladeshi
            organizations, advertisement for all Bangladeshi organizations,
            Anando Mela, and few successful
          </p>
        </div>
      </div>

      <div className="female-des">
        <div className="female-text">
          <h2>RK Fashions - Female</h2>
          <p>
            RK mission is selected considering the cultural heritage of
            Bangladesh and the children who are born and lives in USA. These
            Childrens normally has to adopt two cultures i.e., American, and
            also Bangladesh. Therefore, RK Production selected their mission as
            under. RK mission is selected considering the cultural heritage of
            Bangladesh and the children who are born and lives in USA. These
            Childrens normally has to adopt two cultures i.e., American, and
            also Bangladesh. Therefore, RK Production selected their mission as
            under. Therefore, RK Production selected their mission.
          </p>
        </div>
        <div className="female-image">
          <img alt="img" src={RKFashion_2} />
        </div>
      </div>
      <div className="fashion-des">
        <div className="fashion-image">
          <div>
            <img alt="img" src={RKFashion_3} />
          </div>
        </div>
        <div className="fashion-text">
          <h2>RK Fashion - Male</h2>
          <p>
            RK Production started its journey with culturally reach 5 young and
            energetic members of Bangladeshi community name - Tipu, Rony, Anik,
            Rocky and Shaikh. After glorious victory of Bangladesh Cricket team
            in 2014, RK produced their first promo - Bangladesh World Cup Flash
            Mob and then a short film - Unlimited Shoe where both were highly
            appreciated by the community people.
          </p>
        </div>
      </div>
      <div className="female-des">
        <div className="female-text">
          <h2>RK Fashions - Girls</h2>
          <p>
            RK mission is selected considering the cultural heritage of
            Bangladesh and the children who are born and lives in USA. These
            Childrens normally has to adopt two cultures i.e., American, and
            also Bangladesh. Therefore, RK Production selected their mission as
            under. RK mission is selected considering the cultural heritage of
            Bangladesh and the children who are born and lives in USA. These
            Childrens normally has to adopt two cultures i.e., American, and
            also Bangladesh. Therefore, RK Production selected their mission as
            under. Therefore, RK Production selected their mission as under.
          </p>
        </div>
        <div className="female-image">
          <img alt="img" src={RKFashion_4} />
        </div>
      </div>
      <div className="fashion-des">
        <div className="fashion-image">
          <div>
            <img alt="img" src={RKFashion_5} />
          </div>
        </div>
        <div className="fashion-text">
          <h2>RK Fashion - Boys</h2>
          <p>
            RK Production started its journey with culturally reach 5 young and
            energetic members of Bangladeshi community name - Tipu, Rony, Anik,
            Rocky and Shaikh. After glorious victory of Bangladesh Cricket team
            in 2014, RK produced their first promo - Bangladesh World Cup Flash
            Mob and then a short film - Unlimited Shoe where both were highly
            appreciated by the community people. This greatly inspired the RK
            members to work more and produce some dramas like Onir Golpo,
            advertisement for all Bangladeshi organizations, Anando Mela, and
            few successful cultural programs. advertisement for all Bangladeshi
            organizations, advertisement for
          </p>
        </div>
      </div>

      <div className="RK-Fashion_Jewelry">
        <h2>RK Fashion Jewelry</h2>
      </div>
      <div>
        <div className="rk-jewelry-cart">
          <div className="rk-jewelry-des">
            <div className="rk-jewelry-image">
              <img src={RKJewelry_1} />
            </div>
          </div>
          <div className="rk-jewelry-des">
            <div className="rk-jewelry-image">
              <img src={RKJewelry_2} alt="dinara-pic" />
            </div>
          </div>
          <div className="rk-jewelry-des">
            <div className="rk-jewelry-image">
              <img src={RKJewelry_3} alt="farida-pic" />
            </div>
          </div>
          <div className="rk-jewelry-des">
            <div className="rk-jewelry-image">
              <img src={RKJewelry_4} alt="farida-pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
