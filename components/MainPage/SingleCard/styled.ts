import styled from 'styled-components'

export const WrapperSwiper = styled.div`
    width: 100%;
    & > .swiper {
        border-radius: 16px;
        padding-bottom: 30px;
    }
    & > .swiper > .swiper-pagination {
        bottom: 0px;
    }
`

export const SingleCard = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height: 300px;
    border-radius: 16px;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & .blur-img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: rgba(25, 25, 25, 0.55);
        border-radius: 16px;
    }

    & .card-text {
        z-index: 99999;
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 0px;
        margin: 0px 20px;
        margin-bottom: 12px;
        color: white;
    }
    & .card-text > p {
        font-size: 24px;
        font-weight: 600;
        margin: 0;
    }
    & .card-text > span {
        white-space: nowrap;
        overflow: hidden;
    }
    & .img-card {
        border-radius: 16px;
    }
`