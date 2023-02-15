import React from "react";
import "./herostyle.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className="hero-container">
      {/* left side */}
      <div className="h_side">
        <span className="text1">skin protection cream</span>
        <div className="text2">
          <span>Trendy Collection</span>
          <span>
            Seeding say has suitable disposal and boy. Exercise joy man children
            rejoiced
          </span>
        </div>
      </div>
      {/* middle part */}
      <div className="wrapper">
        <div
          // initial={{ botton: "-0.2rem" }}
          // whileInView={{ bottom: "0rem" }}
          className="bluecircle"
          // transition={transition}
        ></div>

        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg}
          alt=""
          width={600}
        />
        <motion.div
          transition={transition}
          initial={{ right: "-5%" }}
          whileInView={{ right: "-3%" }}
          className="cart2"
        >
          <RiShoppingBagFill />

          <div className="signup">
            <span>Best Signup offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="h_side">
        <div className="traffic">
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className="costomers">
          <span>100k</span>
          <span>Happy Coustmores</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
