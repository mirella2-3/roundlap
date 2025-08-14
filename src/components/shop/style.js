import styled from 'styled-components';

export const ProductdetailStyle = styled.div`
    .text {
        margin-top: 170px;
        > p {
            font-size: 36px;
            font-weight: 700;
        }
    }
`;
export const ProductListWrap = styled.div`
    &.product-box {
        display: flex;
        /* justify-content: space-between; */
        flex-wrap: wrap;

        gap: 9.3px;
        > article {
            width: 343px;
            height: 480px;
            text-align: center;

            margin-bottom: 56px;
            > div {
                img {
                    width: 343px;
                    height: 400px;
                }
            }
            .txt {
                .title {
                    margin-top: 20px;
                    margin-bottom: 10px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 320px;
                    font-size: 16px;
                }
                h4 {
                    display: block;
                    font-weight: 700;
                    font-size: 18px;
                }
            }
        }
    }
`;
