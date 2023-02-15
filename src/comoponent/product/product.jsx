import React, { useState } from "react";
import "./product.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Product = () => {
  const [parent] = useAutoAnimate();

  const [menuData, setMenuData] = useState(ProductsData);

  const filter = (type) => {
    setMenuData(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className="product-container">
      <img src={Plane} />
      <h1>Our Feature Products</h1>
      <div className="products">
        <ul className="product-menu">
          <li onClick={() => setMenuData(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioners</li>
          <li onClick={() => filter("foundation")}>Foundations</li>
        </ul>
        <div className="list" ref={parent}>
          {menuData.map((product, i) => (
            <div className="productshow">
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div className="shop">Shop now</div>
              </div>
              <img src={product.img} className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
