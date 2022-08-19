import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
    height: 50px;
    border-bottom: #eaeaea solid 1px;
    position: relative;


    #search {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        justify-content: center;
        width: 300px;
    }
    #search > svg > path {
        fill: #777777;
    }
    #search > input {
        border: #777777 solid 1px;
        padding: 8px;
        width: 100%;
        background-color: #dddddd;
        border-radius: 12px;
    }
    #icon-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }
    #icon-container > img {
        width: 35px;
    }
    #icon-title-text {
        font-size: 24px;
        font-weight: 800;
    }
    #links-container {
        display: flex;
        justify-content: center;
        gap: 20px;
        justify-content: space-between;
    }
    #links-container > a {
        background-color: red;
        padding: 8px;
        border-radius: 12px;
        color: white;
        background-color: rgb(158, 84, 215);
    }
    @media screen and (max-width: 1000px) {
        #search {
            position: absolute;
            top: 60px;
            width: 100%;
        }
        #icon-container > span {
            font-size: 15px;
        }
        #icon-container > img {
            width: 25px;
        }
        #links-container {
            gap: 10px;
            font-size: 14px;
        }
    }
    @media screen and (max-width: 1000px) {
        #search > input {
            height: 45px;
            font-size: 20px;
        }
    }
`;