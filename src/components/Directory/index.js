import React from "react";
import ShopWomens from "./../../assets/shopWomens.jpg";
import ShopMens from "./../../assets/shopMens.jpg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomens})`,
          }}
        >
          <a>Shop Womens</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMens})`,
          }}
        >
          <a>Shop Mens</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
