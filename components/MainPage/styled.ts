import styled from "styled-components";

export const MainPage = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    & .swiper-slide {
        cursor: pointer;
    }

    & > .wrapper-category {
        padding-bottom: 10px;
        border-bottom: #eaeaea solid 1px;
    }
    & > .wrapper-category:last-child {
        border: none;
    }
`;

export const TitleMainPage = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    & > h1 {
        display: inline-block;
        margin: 0;
    }
    & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        padding: 5px;
        margin-top: 8px;
        background-color: rgb(158,84,215);
        border-radius: 50%;
        cursor: pointer;
    }
    & > span > svg > path {
        fill: white;
    }
    @media screen and (max-width: 1000px) {
        & > h1 {
            font-size: 25px;   
        }
        & > span {
            margin-top: 4px;
        }
    }
`;