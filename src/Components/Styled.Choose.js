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
    grid-template-columns: repeat(3, 1fr);
    gap: 0.2rem;
    place-items: center;
    article {
        margin-top: 2rem;
        width: 500px;
        height: 750px;
        background-color: ${lightBlue};
        border-radius: 2rem;
    }
    .big {
        background-color: white;
        height: 800px
    }
}
.also {
    color: white;
    div {
        color: ${darkBlue};
        width: 1600px;
        height: 100px;
        background-color: ${lightBlue};
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    }
`