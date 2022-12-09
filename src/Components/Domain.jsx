import React from "react";
import Cart from "./Cart";
import { StyledDomain } from "./Styled.Domain";

const Domain = () => {
  return (
    <StyledDomain>
      <div className="container">
        <form>
            <input placeholder="skriv dit domænenavn her"/>
            <select name="domains">
                <option value="eu">.eu</option>
                <option value="dk">.dk</option>
                <option value="com">.com</option>
            </select>
            <button>SØG</button>
        </form>
        <h2>Du er næsten i mål med din bestilling</h2>
      </div>
      <Cart />
    </StyledDomain>
  );
};

export default Domain;
