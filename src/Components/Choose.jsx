import React, { useState } from "react";
import { StyledChoose } from "./Styled.Choose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faWordpress } from "@fortawesome/free-brands-svg-icons"

const Choose = () => {

  const [cartItems, setCartItems] = useState([])

  const handleClick = () => {
    setCartItems([...cartItems, {id: Date.now(), name: "Item"}])

    window.location.href = "/checkout"
  }

  return (
    <StyledChoose>
      <div className="cards">
        <article>
          <h2>Avanceret</h2>
          <p>Bedst til</p>
          <ul>
            <li><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><FontAwesomeIcon icon={faArrowRight} /></li>
          </ul>
          <p>29 kr/md</p>
          <button>Tilføj til kurv</button>
        </article>
        <article className="big">
          <h2>Avanceret</h2>
          <p>Bedst til</p>
          <ul>
            <li><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><FontAwesomeIcon icon={faArrowRight} /></li>
          </ul>
          <p><FontAwesomeIcon icon={faWordpress} />Også inkluderet</p>
          <p>29 kr/md</p>
          <button onClick={handleClick}>Tilføj til kurv</button>
        </article>
        <article>
          <h2>Avanceret</h2>
          <p>Bedst til</p>
          <ul>
            <li><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><FontAwesomeIcon icon={faArrowRight} /></li>
            <li><FontAwesomeIcon icon={faArrowRight} /></li>
          </ul>
          <p><FontAwesomeIcon icon={faWordpress} />Også inkluderet</p>
          <p>29 kr/md</p>
          <button>Tilføj til kurv</button>
        </article>
      </div>
      <article className="also">
        <h2>Inkluderet i alle pakker</h2>
        <div>
          <section>
            <h3>Gratis</h3>
          </section>
          <section>
            <h3>Gratis</h3>
          </section>
          <section>
            <h3>Gratis</h3>
          </section>
        </div>
      </article>
    </StyledChoose>
  );
};

export default Choose;
