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
        text="RK Fashion & Jewelry is a new light in the fashion design and jewelry industry that sells the latest dresses and imitation jewelry items to the general customers at the best and most affordable price. It mainly focuses on customers’ requirements. This is completely an online service where modern dresses and jewelry items are displayed with expected prices on this web page and once the valued customers like it can check out for payment options. Customers can physically come and pick up the items or it can be shipped to the customer’s address as desired."
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
            RK Fashion and Jewelry has a great collection of fashion clothing
            and imitation jewelry for the man, ladies and children. For each
            category has a separate section where all updated fashionable
            dresses for that category has been displayed. Female section mainly
            covers female dresses where men's section displays men's best
            collection. RK fashion always gives priority to your beloved
            childrens where variety of products for the boys and girls are
            displayed in children section. You will love our variety of large
            collection. If you like some dress just contact us using our contact
            page option. Our team members will contact you immediately and
            deliver your desired items in shortest possible time.
          </p>
        </div>
      </div>

      <div className="female-des">
        <div className="female-text">
          <h2>RK Fashions - Female</h2>
          <p>
            Female section completely deals with female's wear those are of
            latest and updated designs directly purchased from the manufacturer.
            We have variety of collection covering - Sharees, T-Shirt, Salwar
            Kameez, Pants and shirts. Sarees and Salwar Kamiz has a large
            variety of collection from different manufacturer. Most of the
            clothings price ranges as per the quality of the product. These also
            varies as per seasons. RK fashion respects the religious values of
            any religion. RK Fashion and Jewelry collections are perfect match
            for your daily needs. Select your desired clothings and contact us.
            Our team will deliver your product immediately.
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
            Man section completely deals with man’s wear those are of latest and
            updated designs directly purchased from the manufacturer. We have
            variety of collection covering - Shirt, trousers, Panjabi, Fatua.
            Most of the products follows Indian / Bangladeshi cultures. Shirts
            includes full sleeve or half sleev which are most suitable for
            office / party environment.
          </p>
        </div>
      </div>
      <div className="female-des">
        <div className="female-text">
          <h2>RK Fashions - Girls</h2>
          <p>
            Girls section completely deals with girls's wear those are of latest
            and updated designs directly purchased from the manufacturer. We
            have variety of collection covering - T-Shirt, Salwar Kameez, Pants
            and shirts. These has a large variety of collection from different
            manufacturer. Most of the clothings price ranges as per the quality
            of the product. These also varies as per seasons. RK fashion
            respects the religious values of any religion. RK Fashion and
            Jewelry collections are perfect match for your daily needs. Select
            your desired clothings and contact us. Our team will deliver your
            product immediately.
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
            Boys section completely deals with boy's wear those are of latest
            and updated designs directly purchased from the manufacturer. We
            have variety of collection covering - T-Shirt, Panjabee, Fatua,
            Shirts, Pants and shorts. These has a large variety of collection
            from different manufacturer. Most of the clothings price ranges as
            per the quality of the product. These also varies as per seasons. RK
            fashion respects the religious values of any religion. RK Fashion
            and Jewelry collections are perfect match for your daily needs.
            Select your desired clothings and contact us. Our team will deliver
            your product immediately.
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
