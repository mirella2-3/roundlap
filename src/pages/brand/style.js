import styled from 'styled-components';

export const BrandStyle = styled.div`
    margin-top: 2000px;

    .wrap {
        display: flex;
        /* width: max-content; */
        width: 100%;
        overflow-x: hidden;

        height: 100vh;
    }

    .wrap > * {
        flex-shrink: 0;

        height: 100vh;
    }

    .panel {
        width: 100vw;
        height: 100vh;
    }
`;
export const MagazineStyle = styled.div``;

export const ProductlineStyle = styled.div`
    .imgM {
        position: absolute;
        z-index: 1;
    }
    .title {
        position: absolute;
        font-size: 300px;
        font-weight: 800;
        line-height: auto;
        color: #fff;
        left: 50%;
        transform: translateX(-50%);
        top: 296px;
    }
    .subTitle {
        position: absolute;
        font-size: 24px;
        font-weight: 700;
        line-height: auto;
        color: #fff;
        left: 50%;
        transform: translateX(-50%);
        top: 634px;
    }
    .ProductLine {
        position: absolute;
        font-size: 30px;
        font-weight: 600;
        line-height: auto;
        color: rgba(255, 255, 255, 0.8);
        left: 50%;
        transform: translateX(-50%);
        top: 820px;
    }
`;
