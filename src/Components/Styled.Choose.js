import styled from "styled-components"
import backgroundImg from "../Assets/bg.jpg"

const darkBlue = "#093763"
const normalBlue = "#1E74A8"
const lightBlue = "#EAFFFF"
const darkGrey = "#707070"

export const StyledChoose = styled.section`
background-image: url(${backgroundImg});
width: 1920px;
height: 1024px;
.cards{
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-content: center;
    gap: 1rem;
    article {
        margin-top: 1rem;
        width: 500px;
        height: 750px;
        background-color: ${lightBlue};
        border-radius: 2rem;
        display: grid;
        grid-template-rows: repeat(6, auto);
        justify-items: center;
        align-content: start;
        gap: 1rem;
        h2 {
            color: ${darkBlue};
            text-align: center;
        }
        h4 {
            color: ${normalBlue};
            text-align: center;
        }
        ul {
            list-style-type: none;
            text-align: left;
            color: ${normalBlue};

            svg {
                padding-right: 1rem;
                color: ${normalBlue}
            }
        }
        p {
            color: ${normalBlue};
            font-size: 0.5rem;
        }

        .price {
            color: ${darkBlue};
            font-size: 1.2rem;
        }
        button {
            border: none;
            background-color: ${darkBlue};
            color: white;
            width: 250px;
            height: 80px;
            font-size: 20px;
            border-radius: 40px;
            font-weight: bold;
            cursor: pointer;
            :hover {
                background-color: ${normalBlue};
            }
        }
    }
    .big {
        background-color: white;
        height: 800px;
        border-radius: 1rem;
        button {
            transform: scale(1.2);
        }
    }
}
.also {
    color: white;
    text-align: center;
    h2 {
        font-size: 1rem;
    }
    div {
        color: ${darkBlue};
        font-size: 0.7rem;
        width: 1600px;
        background-color: ${lightBlue};
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    }
`