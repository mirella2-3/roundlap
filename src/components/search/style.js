import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    top: 0px;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

    display: flex;
    justify-content: end;
`;

export const ModalContent = styled.div`
    width: 630px;
    height: 100%;
    background: #fff;

    padding: 0px 60px;
    box-sizing: border-box;
`;

export const SearchStyle = styled.div`
    .searchbox {
        width: 510px;
        .searchtool {
            .SearchTop {
                margin-top: 90px;

                width: 510px;
                display: flex;
                justify-content: space-between;
                h2 {
                    font-size: 36px;
                    font-weight: 700;
                    color: #1a1a1a;
                }
                button {
                    background: none;
                    svg {
                        margin-right: -8px;
                        color: #1a1a1a;
                        width: 40px;
                        height: 40px;
                        /* cursor: pointer; */
                    }
                }
            }
            .input {
                margin-top: 46px;
                display: flex;
                p {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    width: 510px;
                    height: 48px;
                    border: 1px solid #b1b1b1;

                    box-sizing: border-box;
                    padding: 0px 20px;

                    input {
                        width: 400px;
                        height: 38px;
                        padding: 0px;
                        border: none;
                        outline: none;

                        font-family: 'Pretendard';
                        font-size: 16px;
                        font-weight: 400;

                        &::placeholder {
                            color: #8a8a8a;
                        }
                    }
                }
            }
            .best {
                margin-top: 12px;
                margin-bottom: 55px;
                display: flex;
                align-items: center;
                gap: 10px;
                h3 {
                    font-size: 16px;
                    font-weight: 800;
                    color: #515151;
                }
                p {
                    font-size: 14px;
                    font-weight: 500;
                    color: #8a8a8a;
                }
            }
            .producttype {
                width: 510px;
                box-sizing: border-box;
                padding-bottom: 12px;
                border-bottom: 1px solid #e3e3e3;
                h2 {
                    font-size: 20px;
                    font-weight: 700;
                    color: #515151;
                }
            }
            .type {
                margin-top: 16px;
                margin-bottom: 30px;
                width: 510px;
                button {
                    font-size: 14px;
                    font-weight: 400;
                    color: #8a8a8a;

                    border: 1px solid #c2c2c2;
                    border-radius: 20px;
                    background: #fff;
                    padding: 8px 14px;

                    margin-right: 8px;
                    margin-bottom: 10px;

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
        }
    }
`;

export const OverlayStyle = styled.div`
    position: fixed;
    top: -50px;
    left: -910px;
    width: 1920px;
    height: 1280px;
    background: rgba(0, 0, 10, 0.8);
    z-index: 9998;
`;
