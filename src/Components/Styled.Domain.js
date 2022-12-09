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
  .container {
    margin: 4rem auto;
    form {
      display: flex;
      gap: 1rem;
      input {
        width: 15rem;
        border-radius: 10px;
        border: none;
        height: 2rem;
        background-color: ${lightBlue};
        ::placeholder {
          text-align: center;
          font-size: 0.8rem;
          font-style: italic;
        }

      }
      select {
        border-radius: 10px;
        background-color: ${lightBlue};
        border: none;
        height: 2rem;
        text-align: center;
        cursor: pointer;
        font-size: 0.8rem;
        option {
          border-radius: 20px;
        }
      }
      button {
        background-color: ${normalBlue};
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        height: 2rem;
        width: 3rem;
        font-size: 0.8rem;
        :hover {
          background-color: ${darkBlue};
        }
      }
    }
    h2 {
      color: white;
    }
  }
`;
