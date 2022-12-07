import React from "react";
import { StyledChoose } from "./Styled.Choose";

const Choose = () => {
  return (
    <StyledChoose>
      <div className="cards">
        <article><h2>Avanceret</h2>
            <p>Bedst til</p>
            <ul><li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
            <p>Også inkluderet</p>
            <p>29 kr/md</p>
            <button>Tilføj til kurv</button>
        </article>
        <article className="big"><h2>Avanceret</h2>
            <p>Bedst til</p>
            <ul><li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
            <p>Også inkluderet</p>
            <p>29 kr/md</p>
            <button>Tilføj til kurv</button>
        </article>
        <article><h2>Avanceret</h2>
            <p>Bedst til</p>
            <ul><li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
            <p>Også inkluderet</p>
            <p>29 kr/md</p>
            <button>Tilføj til kurv</button>
        </article>
      </div>
      <article className="also">
        <h2>Inkluderet i alle pakker</h2>
        <div>
            <section><h3>Gratis</h3></section>
            <section><h3>Gratis</h3></section>
            <section><h3>Gratis</h3></section>
        </div>
      </article>
    </StyledChoose>
  );
};

export default Choose;
