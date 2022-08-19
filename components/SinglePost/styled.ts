import styled from "styled-components";

export const MainSinglePost = styled.div<{category: any}>`
    display: flex;
    justify-content: center;
    align-items: center;

    #header-single-post {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #header-single-post > span {
        padding-top: 5px;
        cursor: pointer;
        margin-left: 20px;
    }

    #header-single-post > span > svg {
        width: 35px;
        height: 35px;
        margin-top: 10px;
    }

    #header-single-post > span > svg > path {
        fill: #eb4044;
    }
    
    #wrapper-container-post {
        margin: 0px 25%;
        display: flex;
        flex-direction: ${({category}) => category !== 'Images' ? "column-reverse" : "column"};
    }
    #wrapper-container-post button {
        margin-top: 20px;
        height: 50px;
        border-radius: 16px;
        border:none;
        background-color: rgb(158,84,215);
        color: white;
        font-size: 20px;
        font-weight: 800;
    }
    #wrapper-container-post > select {
        padding: 10px;
        border-radius: 0;
        margin-bottom: 15px;
    }
    #wrapper-container-post > select:focus {
        outline: none;
    }
    #text-single-post {
        flex: 1;
        margin-top: 20px;
    }
    #header-single-post > h1{
        margin: 0;
        font-size:70px;
        line-height: 1.5em;
    }
    #text-single-post > h2 {
        margin: 0;
        font-size:30px;
        color: gray;
        font-weight: 400;
        line-height: 1.5em;
    }
    #text-single-post > p {
        margin: 0;
        font-size:30px;
        line-height: 1.8em;
        font-weight: 600;
        text-align: justify;
    }
    #grid-img {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;
    }

    #grid-img > .add-img-wrapper, .add-img-gird {
        position: relative;
        width: 300px;
        height: 300px;
        background-color: gray;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #grid-img > .add-img-wrapper > span {
        position: absolute;
        left: 0px;
        top: 0px;
        display: flex;
        width: 30px;
        height: 30px;
        background-color: #f0f1f0;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    #grid-img > .single-post {
        width: 100%;
    }

    #grid-img .add-img-wrapper > img {
        width: 100%;
        object-fit: contain;
    }


    .add-img-gird {
        background-color: #fcfcfc;
        cursor: pointer;
    }

    .add-img-gird > input[type="file"] {
        display: none;
    }

    #grid-img > label {        
        cursor: pointer;
        user-select: none;
    }

    #desc-inp {
        margin-top: 15px;
        font-size: 20px;
        resize: none;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.8em;
        border: none;
        border-top: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
        transition: 0.3s;
        padding: 10px;
        background-color: #fcfcfc;
        height: 350px;
    }
    #desc-inp, #title-inp, #short-desc-inp:focus{
        outline: none;
    }
    #title-inp, #short-desc-inp {
        border: none;
        display: block;
        width: 100%;
        color: gray;
        font-family: Arial, Helvetica, sans-serif;
    }
    #short-desc-inp {
        font-size: 30px;
        margin-top: 15px;
    }
    #title-inp {
        font-size: 40px;
        margin-top: 15px;
    }

    @media screen and (max-width: 1000px) {
        #header-single-post > span > svg {
            width: 35px;
            height: 35px;
            margin-top: 0px;
        }
        #grid-img {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        #wrapper-container-post {
            margin: 0px;
        }

        #header-single-post {
            padding-bottom: 15px;
        }

        #header-single-post > h1{
            margin: 0;
            font-size:25px;
            line-height: 1.5em;
        }
        #text-single-post > h2 {
            margin: 0;
            font-size:20px;
            color: gray;
            font-weight: 400;
            line-height: 1.5em;
        }
        #text-single-post > p {
            margin-top: 15px;
            margin: 0;
            font-size:16px;
            line-height: 1.8em;
            font-weight: 600;
            text-align: justify;
            margin-bottom: 50px;
        }
        #grid-img .add-img-wrapper > img {
            height: 100%;
            object-fit: contain;
        }
        #grid-img > .add-img-wrapper, .add-img-gird {
            position: relative;
            width: 100%;
            height: 300px;
            background-color: gray;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .add-img-gird {
            width: 100%;
        }
        #grid-img > label {        
            min-width: 100%;
        }
    }
`
export const WrapperImgs = styled.div`
    .img-grid{
        height: 100%;
        object-fit: cover;	
        border-radius: 16px;
    }
    .wrapper-imgs {
        border-radius: 16px;
        height: 200px;
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;

    }
`