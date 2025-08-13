import styled from 'styled-components';

export const ShopStyle = styled.div`
    .inner {
        margin: 160px auto;
    }
    h2 {
        color: #1a1a1a;
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 54px;
    }

    /* 추후 구조 수정 필요 */
    .product-tabs {
        font-size: 20px;
        color: #515151;
        display: flex;
        margin: auto 0;
        gap: 40px;
        justify-content: center;

        > div {
            padding: 14px 0;
        }
        &.on {
            color: #1a1a1a;
            font-weight: 700;
            position: relative;
            &::after {
                content: '';
                height: 3px;
                width: 40px;
                display: block;
                position: absolute;
                bottom: 0;
                background: #007bcc;
            }
        }
    }
    .line {
        height: 1px;
        width: 100%;
        background: #e3e3e3;
        margin-bottom: 80px;
    }
    h3 {
        font-size: 30px;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 30px;
    }
`;
