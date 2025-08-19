import styled from 'styled-components';
export const OverlayStyle = styled.div`
    position: fixed;
    top: -50px;
    left: -610px;
    width: 1920px;
    height: 1280px;
    background: rgba(0, 0, 10, 0.8);
    z-index: 9998;
`;
export const SearchStyle = styled.div`
    position: relative;

    .searchbox {
        position: absolute;
        top: -50px;
        right: -256px;
        width: 630px;
        height: 1080px;
        justify-content: center;
        align-items: center;
        background-color: white;
        z-index: 9999;
        .searchtool {
            padding: 70px 60px;
            width: 510px;
            height: 709px;
            .SearchTop {
                width: 510px;
                display: flex;
                justify-content: space-between;
                h2 {
                    color: #1a1a1a;
                    font-size: 36px;
                    font-weight: bold;
                }
                button {
                    background: none;
                    svg {
                        width: 35px;
                        height: 35px;
                    }
                }
            }
            .input {
                position: relative;
                margin-top: 46px;
                display: flex;
                input {
                    width: 481px;
                    height: 21px;
                    padding: 10px 15px;
                    border: 1px solid #515151;
                }
                svg {
                    color: black;
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    top: 12px;
                    right: 17px;
                }
            }
            .best {
                margin-top: 12px;
                width: 272px;
                height: 21px;
                display: flex;
                justify-content: space-between;
                h3 {
                    font-size: 16px;
                    font-weight: bold;
                    color: #515151;
                }
                p {
                    font-size: 14px;
                    font-weight: medium;
                    color: #8a8a8a;
                }
            }
            .producttype {
                margin-top: 70px;
                padding-bottom: 16px;
                border-bottom: 1px solid #e3e3e3;
                h2 {
                    font-size: 20px;
                    font-weight: bold;
                    color: #1a1a1a;
                }
            }
            .type {
                padding-top: 16px;
                width: 510px;
                height: 82px;
                button {
                    font-size: 16px;
                    font-weight: medium;
                    border-radius: 20px;
                    width: 111px;
                    height: 36px;
                    margin-bottom: 16px;
                    margin-right: 8px;
                    border: 1px solid #8a8a8a;
                    background: none;
                    color: #8a8a8a;
                    &:hover {
                        background-color: #f9f9f9;
                    }
                }
                .small {
                    width: 83px;
                    height: 36px;
                }
                .big {
                    width: 102px;
                    height: 36px;
                }
            }
            .producttype1 {
                margin-top: 50px;
                padding-bottom: 16px;
                border-bottom: 1px solid #e3e3e3;
                h2 {
                    font-size: 20px;
                    font-weight: bold;
                    color: #1a1a1a;
                }
            }
            .type1 {
                padding-top: 16px;
                width: 510px;
                height: 82px;
                button {
                    font-size: 16px;
                    font-weight: medium;
                    border-radius: 20px;
                    width: 111px;
                    height: 36px;
                    margin-bottom: 16px;
                    margin-right: 8px;
                    border: 1px solid #8a8a8a;
                    background: none;
                    color: #8a8a8a;
                    &:hover {
                        background-color: #f9f9f9;
                    }
                }
                .small {
                    width: 83px;
                    height: 36px;
                }
                .big {
                    width: 102px;
                    height: 36px;
                }
            }
            .producttype2 {
                margin-top: 50px;
                padding-bottom: 16px;
                border-bottom: 1px solid #e3e3e3;
                h2 {
                    font-size: 20px;
                    font-weight: bold;
                    color: #1a1a1a;
                }
            }
            .type2 {
                padding-top: 16px;
                width: 510px;
                height: 82px;

                button {
                    font-size: 16px;
                    font-weight: medium;
                    border-radius: 20px;
                    width: 97px;
                    height: 36px;
                    margin-bottom: 16px;
                    margin-right: 8px;
                    border: 1px solid #8a8a8a;
                    background: none;
                    color: #8a8a8a;
                    &:hover {
                        background-color: #f9f9f9;
                    }
                }
                .small {
                    width: 70px;
                    height: 40px;
                }
                .medium {
                    width: 115px;
                    height: 36px;
                }
                .big {
                    width: 133px;
                    height: 36px;
                }
                margin-bottom: 70px;
            }
        }
    }
`;
