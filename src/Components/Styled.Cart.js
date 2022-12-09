import styled from "styled-components";

const darkBlue = "#093763";
const normalBlue = "#1E74A8";
const lightBlue = "#EAFFFF";
const darkGrey = "#707070";

export const StyledCart = styled.article`
  background-color: white;
  width: 600px;
  height: 80%;
  border-radius: 20px;
  margin: auto;
  padding: 0 1rem;
  color: ${darkBlue};
  display: grid;
  font-size: 1rem;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .year {
    color: ${darkGrey};
    justify-self: end;
    margin-right: 3rem;
    align-self: end;
  }
  .price {
    align-self: start;
  }
  .total {
    font-weight: bolder;
    span {
        font-weight: 400;
    }
  }
  input {
    border-radius: 20px;
    height: 1rem;
    width: 7rem;
    justify-self: center;
    align-self: flex-end;
    text-align: center;
}
  button {
    border: none;
    background-color: ${normalBlue};
    color: white;
    width: 6rem;
    height: 2rem;
    border-radius: 10px;
    font-weight: bold;
    justify-self: end;
    cursor: pointer;
    font-size: 0.8rem;
    :hover {
        background-color: ${darkBlue};
    }
  }
`;
