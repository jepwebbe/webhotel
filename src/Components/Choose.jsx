import React, { useState } from "react";
import { StyledChoose } from "./Styled.Choose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";

import Cart from "./Cart"; // Import the Cart component

const Choose = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleClick = () => {
    setCartItems([...cartItems, { id: Date.now(), name: "Item" }]);

  };

  return (
    <StyledChoose>
      <div className="cards">
        <article>
          <div>
            <h2>Begynder</h2>
            <h4>Bedst til iværksættere</h4>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />1 hjemmeside
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              50GB SSD
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              Ubegrænsede mailkonti
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              Daglige backups
            </li>
          </ul>
          <p className="price">9 kr/md</p>
          <button>Tilføj til kurv</button>
        </article>
        <article className="big">
          <div>
            <h2>Avanceret</h2>
            <h4>Bedst til små projekter</h4>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />5 hjemmesider
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              200GB SSD
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              Ubegrænsede mailkonti
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              Daglige backups
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              Daglig gendannelse
            </li>
          </ul>
          <p>
            <FontAwesomeIcon icon={faWordpress} /> 1-click
            Wordpress-installation også inkluderet
          </p>
          <p className="price">29 kr/md</p>
          <button onClick={handleClick}>Tilføj til kurv</button>
          <div>
            {cartItems.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        </article>
        <article>
          <div>
            <h2>Rutineret</h2>
            <h4>Bedst til blogs</h4>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />1 hjemmeside
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              100GB SSD
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              Ubegrænsede mailkonti
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              Daglige backups
            </li>
          </ul>
          <p>
            <FontAwesomeIcon icon={faWordpress} /> 1-click
            Wordpress-installation også inkluderet
          </p>
          <p className="price">19 kr/md</p>
          <button>Tilføj til kurv</button>
        </article>
      </div>
      <article className="also">
        <h2>Inkluderet i alle pakker</h2>
        <div>
          <section>
            <h3>Gratis domæne i 1 år</h3>
            <p>
              Alle vores pakker indeholder et gratis domæne i et helt år, så du
              kommer godt fra start
            </p>
          </section>
          <section>
            <h3>Gratis hjemmesideprogram</h3>
            <p>
              Begynd at bygge din online drøm med vores brugervenlige
              hjemmesideprogram.
            </p>
          </section>
          <section>
            <h3>Gratis Google Ads-kredit</h3>
            <p>
              Få trafik på din hjemmeside med Google Ads. Få 1 måned gratis, når
              du tilmelder dig.
            </p>
          </section>
        </div>
      </article>
    </StyledChoose>
  );
};

export default Choose;
