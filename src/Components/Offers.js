import React from "react";
import Offer from "./Offer.js";
import "../Styles/Offers.css";

const Offers = ({ offer }) => {
  return (
    <div className="offersSection">
      {offer.map((item, index) => (
        <Offer
          key={index} // Use index or a unique property of item as key
          index={index}
          src={item.image}
          link={item.url}
        />
      ))}
    </div>
  );
};

export default Offers;
