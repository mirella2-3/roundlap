import styled from 'styled-components';
export const FooterStyle = styled.footer`
    background: #f6f7f0ff;

    .inner {
        padding: 90px 0 130px 0;

        > ul {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #515151;
            h3 {
                font-size: 16px;
                font-weight: 700;
                color: #007bcc;
                margin-bottom: 10px;
            }
        }
    }

    .left {
        > ul {
            > li {
                h1 {
                    margin-bottom: 24px;
                }
                &:nth-child(2) {
                    ul {
                        display: flex;
                        gap: 12px;
                        margin-bottom: 10px;
                        > li {
                            position: relative;
                            cursor: pointer;

                            &:nth-child(2) {
                                color: #007bcc;
                            }
                            &::after {
                                content: '';
                                width: 1px;
                                height: 10px;
                                display: block;
                                background: #d6d6d6;
                                position: absolute;
                                top: 50%;
                                transform: translateY(-50%);
                                right: -6px;
                            }
                            &:last-child {
                                &::after {
                                    display: none;
                                }
                            }
                        }
                    }
                }
                &:nth-child(3) {
                    margin-bottom: 24px;
                }
            }
        }
    }
    .center {
        line-height: 1;
        padding-left: 140px;
        ul > li {
            margin-bottom: 9px;
            h3 {
                margin-bottom: 14px;
            }
            ul {
                display: flex;
                gap: 12px;

                > li {
                    position: relative;
                    margin-bottom: 0px;
                    &::after {
                        content: '';
                        width: 1px;
                        height: 10px;
                        display: block;
                        background: #d6d6d6;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        right: -6px;
                    }
                    strong {
                        font-weight: 600;
                    }
                    &:last-child::after {
                        display: none;
                    }
                }
            }
        }
    }
    .right {
        line-height: 1;
        ul > li {
            &:nth-child(1) {
                margin-bottom: 14px;
            }
            &:nth-child(2) {
                font-size: 18px;
                font-weight: 700;
                color: #1a1a1a;
            }
            &:nth-child(3) {
                font-size: 14px;
                font-weight: 500;
                color: #515151;
                margin-top: 8px;
            }
        }
    }
`;
