import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { StyledCart } from "./Styled.Cart";

const Cart = () => {
  return (
    <StyledCart>
      <div>
        <h2>Din kurv</h2>
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
      <p className="year">Pris på år</p>
      <div className="price">
        <p>Webhotel</p>
        <p>338 ,-</p>
      </div>
      <input placeholder="værdikode" />
      <div className="total">
        <p>
          Pris i alt <span>inkl. moms</span>
        </p>
        <p>338 ,-</p>
      </div>
      <button>NÆSTE</button>
    </StyledCart>
  );
};

export default Cart;
