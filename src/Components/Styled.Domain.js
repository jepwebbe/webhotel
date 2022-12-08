import styled from "styled-components";
import backgroundImg from "../Assets/bg.jpg";

const darkBlue = "#093763";
const normalBlue = "#1E74A8";
const lightBlue = "#EAFFFF";
const darkGrey = "#707070";

export const StyledDomain = styled.section`
  background-image: url(${backgroundImg});
  width: 1920px;
  height: 1024px;
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  div {
    padding-left: 5rem;
    form {
    margin: 3.5rem auto 0 auto;
    gap: 1rem;
    input {
      height: 1.5rem;
      width: 50%;
      border-radius: 10px;
    }
    select {
      height: 1.5rem;
      border-radius: 10px;
    }
  }
  button {
    padding: 0.5rem;
    margin: 0.5rem 0;
    background-color: ${normalBlue};
    color: white;
    border: none;
    border-radius: 10px;
  }
  }
  .cart {
  }
  
`;
