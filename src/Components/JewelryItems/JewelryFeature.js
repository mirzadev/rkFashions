import "./JewelryStyles.css";
import { Link } from "react-router-dom";
import handBracelet1 from "../Assets/Jewelry/jewelry-1.jpg";
import handBracelet2 from "../Assets/Jewelry/jewelry-2.jpg";
import handBracelet3 from "../Assets/Jewelry/jewelry-3.jpg";
import handBracelet4 from "../Assets/Jewelry/jewelry-4.jpg";
import handBracelet5 from "../Assets/Jewelry/jewelry-5.jpg";
import handBracelet6 from "../Assets/Jewelry/jewelry-6.jpg";
import handBracelet7 from "../Assets/Jewelry/jewelry-25.jpg";
import handBracelet8 from "../Assets/Jewelry/jewelry-24.jpg";
import handBracelet9 from "../Assets/Jewelry/jewelry-15.jpg";
import handBracelet10 from "../Assets/Jewelry/jewelry-29.jpg";
import handBracelet11 from "../Assets/Jewelry/jewelry-21.jpg";
import handBracelet12 from "../Assets/Jewelry/jewelry-22.jpg";
import handBracelet13 from "../Assets/Jewelry/jewelry-20.jpg";
import handBracelet14 from "../Assets/Jewelry/jewelry-26.jpg";
import handBracelet15 from "../Assets/Jewelry/jewelry-27.jpg";
import handBracelet16 from "../Assets/Jewelry/jewelry-28.jpg";
import handBracelet17 from "../Assets/Jewelry/jewelry-23.jpg";
import imitationJewelryt1 from "../Assets/Jewelry/jewelry-7.jpg";
import imitationJewelryt2 from "../Assets/Jewelry/jewelry-12.jpg";
import imitationJewelryt3 from "../Assets/Jewelry/jewelry-9.jpg";
import imitationJewelryt4 from "../Assets/Jewelry/jewelry-10.jpg";
import imitationJewelryt5 from "../Assets/Jewelry/jewelry-11.jpg";
import imitationJewelryt6 from "../Assets/Jewelry/jewelry-8.jpg";
import imitationJewelryt7 from "../Assets/Jewelry/jewelry-13.jpg";
import imitationJewelryt8 from "../Assets/Jewelry/jewelry-14.jpg";
import imitationJewelryt9 from "../Assets/Jewelry/jewelry-16.jpg";
import imitationJewelryt10 from "../Assets/Jewelry/jewelry-17.jpg";
import imitationJewelryt11 from "../Assets/Jewelry/jewelry-18.jpg";
import imitationJewelryt12 from "../Assets/Jewelry/jewelry-19.jpg";

function JewelryFeature() {
  const handleClick = () => {};
  return (
    <div className="rk-jewelry-heading">
      <h1>RK Jewelry Items</h1>
      <p className="rk-jewelry-heading-expl">Find your fashion jewelry</p>

      <div className="jewelry-container">
        <h3>Hand Bracelets</h3>
        <div className="bracelet-cart">
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet1} alt="epi1" />
            </div>
            <h3>Black Stone Golden Bracelets</h3>
            <p>Price: $20.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet2} alt="epi2" />
            </div>
            <h3>Bracelet-Silver</h3>
            <p>Price: $25.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet3} alt="epi3" />
            </div>
            <h3>Bracelet- Golden With Love</h3>
            <p>Price: $40.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet4} alt="epi4" />
            </div>
            <h3>Bracelet- With Eye stone</h3>
            <p>Price: $35.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
        <div className="bracelet-cart">
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet5} alt="epi1" />
            </div>
            <h3>Golden Bracelets</h3>
            <p>Price: $20.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet6} alt="epi2" />
            </div>
            <h3>Bracelet-Multi-Color</h3>
            <p>Price: $8.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet7} alt="epi3" />
            </div>
            <h3>Bracelet-Golden Single</h3>
            <p>Price: $20.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet8} alt="epi4" />
            </div>
            <h3>Bracelet-Multi Layer</h3>
            <p>Price: $25.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
        <div className="bracelet-cart">
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet9} alt="epi1" />
            </div>
            <h3>Bracelet-Silver-Single</h3>
            <p>Price: $15.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet10} alt="epi2" />
            </div>
            <h3>Bracelet-Multi Layer</h3>
            <p>Price: $25.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet11} alt="epi3" />
            </div>
            <h3>Bracelet-Mix-Variety</h3>
            <p>Price: $40.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet12} alt="epi4" />
            </div>
            <h3>Bracelet- Mix-Variety</h3>
            <p>Price: $35.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
        <div className="bracelet-cart">
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet13} alt="epi1" />
            </div>
            <h3>Bracelets-Multiple-Pink</h3>
            <p>Price: $10.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet14} alt="epi2" />
            </div>
            <h3>Bracelets-Multiple-Blue</h3>
            <p>Price: $10.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet15} alt="epi3" />
            </div>
            <h3>Bracelets-Multiple-Yellow</h3>
            <p>Price: $10.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet16} alt="epi4" />
            </div>
            <h3>Bracelets-Multiple-Black</h3>
            <p>Price: $10.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
        <div className="bracelet-cart">
          <div className="bracelet-item">
            <div className="bracelet-item-image">
              <img src={handBracelet17} alt="epi1" />
            </div>
            <h3>Bracelets-Multiple-Variety</h3>
            <p>Price: $8.00 / Each Color</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>

        <h3 className="jewelry-main-heading">Imitation Jewelry</h3>
        <div className="jewelry-cart">
          <div className="jewelry-item">
            <div className="jewelry-item-image">
              <img src={imitationJewelryt1} alt="epi1" />
            </div>
            <h3>Necklace Set-Twested</h3>
            <p>Price: $25.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="jewelry-item">
            <div className="jewelry-item-image">
              <img src={imitationJewelryt2} alt="epi2" />
            </div>
            <h3>Necklace Set-With Stones</h3>
            <p>Price: $25.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="jewelry-item">
            <div className="jewelry-item-image">
              <img src={imitationJewelryt3} alt="epi3" />
            </div>
            <h3>Necklace Set-Golden</h3>
            <p>Price: $20.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="jewelry-item">
            <div className="jewelry-item-image">
              <img src={imitationJewelryt4} alt="epi4" />
            </div>
            <h3>Necklace-Golden</h3>
            <p>Price: $15.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
        <div className="jewelry-cart">
          <div className="jewelry-item">
            <div className="jewelry-item-image">
              <img src={imitationJewelryt5} alt="epi1" />
            </div>
            <h3>Necklace-Set-Silver</h3>
            <p>Price: $20.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="jewelry-item">
            <div className="jewelry-item-image">
              <img src={imitationJewelryt6} alt="epi2" />
            </div>
            <h3>Necklace - Stone</h3>
            <p>Price: $10.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="jewelry-item">
            <div className="jewelry-item-image">
              <img src={imitationJewelryt7} alt="epi3" />
            </div>
            <h3>Necklace-Set-Silver</h3>
            <p>Price: $20.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="jewelry-item">
            <div className="jewelry-item-image">
              <img src={imitationJewelryt8} alt="epi4" />
            </div>
            <h3>Necklace - Stones</h3>
            <p>Price: $12.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
        <div className="jewelry-cart">
          <div className="jewelry-item">
            <div className="jewelry-item-image">
              <img src={imitationJewelryt9} alt="epi1" />
            </div>
            <h3>Necklace looks Diamond</h3>
            <p>Price: $8.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="jewelry-item">
            <div className="jewelry-item-image">
              <img src={imitationJewelryt10} alt="epi2" />
            </div>
            <h3>Necklace looks Diamond</h3>
            <p>Price: $25.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="jewelry-item">
            <div className="jewelry-item-image">
              <img src={imitationJewelryt11} alt="epi3" />
            </div>
            <h3>Necklace looks Diamond</h3>
            <p>Price: $20.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
          <div className="jewelry-item">
            <div className="jewelry-item-image">
              <img src={imitationJewelryt12} alt="epi4" />
            </div>
            <h3>Necklace looks Diamond</h3>
            <p>Price: $18.00</p>
            <Link to={"/payment"}>
              <button onClick={handleClick} className="add-to-cart-button">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JewelryFeature;
