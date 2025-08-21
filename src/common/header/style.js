import styled from 'styled-components';

// export const HeaderStyle = styled.header`
//     box-sizing: border-box;
//     width: 100%;
//     top: 0;
//     z-index: 1000;

//     position: ${({ isMain }) => (isMain ? 'fixed' : 'relative')};
//     background: ${({ isMain }) => (isMain ? 'transparent' : 'white')};
//     height: 120px;
//     color: ${({ isMain }) => (isMain ? 'white' : '#515151')};
//     border-bottom: 1px solid ${({ isMain }) => (isMain ? 'transparent' : '#ececec')};

//     transition: transform 1s ease;
//     transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-100%)')};
//     .inner {
//         height: 100%;
//     }

//     h1 {
//         position: absolute;
//         left: 0;
//         top: 50%;
//         transform: translateY(-50%);
//     }
// `;
export const HeaderStyle = styled.header`
    box-sizing: border-box;
    width: 100%;
    top: 0;
    z-index: 1000;
    height: 120px;
    position: fixed;

    background: ${({ isTransparent, isHover }) =>
        isTransparent && !isHover ? 'transparent' : 'white'};

    color: ${({ isTransparent, isHover }) => (isTransparent && !isHover ? 'white' : '#515151')};

    border-bottom: 1px solid
        ${({ isTransparent, isHover }) => (isTransparent && !isHover ? 'transparent' : '#ececec')};

    transition: all 0.4s ease;
    transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-100%)')};

    .inner {
        height: 100%;
        position: relative;
    }

    h1 {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const NavStyle = styled.nav`
    &.nav {
        position: absolute;
        right: 0;
        top: 110px;
        transform: translateY(-50%);
        display: flex;
        gap: 167px;

        .MainMenu {
            display: flex;
            position: relative;
            z-index: 100;

            a {
                display: block;
                width: 85px;

                color: ${({ isMain }) => (isMain ? '#fff' : '#515151')};
                font-size: 18px;

                &:hover {
                    color: #007bbc;
                }
            }
            li {
                &.shopMenu {
                    .navBg {
                        position: absolute;
                        /* bottom: -162px; */
                        top: 71px;
                        left: 48%;
                        transform: translateX(-50%);
                        width: 100vw;
                        height: 428px;

                        background: #fff;
                        background-image: url(/images/header/header_img2.png);
                        background-position: left 17% top -25px;
                        background-repeat: no-repeat;

                        z-index: -100;
                        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
                    }

                    .subMenu {
                        cursor: default;
                        position: absolute;
                        /* display: none; */
                        display: flex;
                        gap: 87px;
                        top: 103.5px;
                        font-size: 16px;
                        > li {
                            width: 141px;
                            height: 233px;
                            color: #515151;
                            font-weight: 700;
                            .subSubMenu {
                                margin-top: 22px;

                                li {
                                    margin-top: 8px;
                                    a {
                                        width: 233px;
                                        color: #515151;
                                        padding-left: 0;
                                        font-size: 16px;
                                        font-weight: 400;

                                        &:hover {
                                            color: #007bcc;
                                        }
                                    }
                                }
                            }
                            &::before {
                                content: '';
                                display: block;
                                width: 1px;
                                height: 428px;
                                background: #ececec;

                                position: absolute;
                                left: -34px;
                                top: -33px;
                            }
                            &::after {
                                content: '';
                                display: block;
                                width: 1px;
                                height: 428px;
                                background: #ececec;
                                position: absolute;
                                top: -33px;
                            }
                        }
                        .allMenu {
                            &::after {
                                left: 194.5px;
                            }
                        }
                        .typeMenu {
                            &::after {
                                left: 423px;
                            }
                        }
                        .concernMenu {
                            &::after {
                                left: 651.5px;
                            }
                        }
                        .lineMenu {
                            &::after {
                                left: 880px;
                            }
                        }
                    }
                }
            }
        }
        .brandMenu {
            position: relative;
            .subMenu {
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
                position: absolute;
                top: 70.5px;
                left: -60px;
                padding: 40px;
                background: #fff;

                a {
                    width: 112px;
                    font-size: 16px;
                    margin-bottom: 8px;
                    color: #515151;
                    font-weight: 400;
                    &:hover {
                        color: #007bcc;
                    }
                }
            }
            /* display: none; */
        }
        .csMenu {
            padding-right: 19px;
            padding-bottom: 100px;
            /* box-sizing: border-box; */
            > a {
                width: 110px;
            }
            position: relative;
            .subMenu {
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
                width: 59px;
                position: absolute;
                top: 70.5px;

                left: -15px;
                padding: 40px;
                background: #fff;
                font-size: 16px;
                a {
                    font-size: 16px;
                    margin-bottom: 8px;
                    color: #515151;
                    font-weight: 400;
                    &:hover {
                        color: #007bcc;
                    }
                }
            }
            /* display: none; */
        }
    }
    .topMenu {
        display: flex;
        gap: 12px;
        font-size: 16px;
        font-weight: 500;
        height: 30px;
        padding-left: 116px;
        align-items: center;

        a {
            color: ${({ isMain }) => (isMain ? '#fff' : '#515151')};
        }
        .login {
            display: flex;
            gap: 12px;
            position: relative;
            li {
                &:first-child::after {
                    content: '';
                    width: 1px;
                    height: 12px;
                    background: ${({ isMain }) => (isMain ? '#fff' : '#515151')};
                    display: block;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 53px;
                }
            }
        }
        .person {
            font-size: 22px;
            padding: 5px 0 0 0;
        }
        .cart {
            display: flex;

            p {
                background: ${({ isMain }) => (isMain ? '#fff' : '#515151')};
                width: 16px;
                height: 16px;
                border-radius: 16px;
                color: ${({ isMain }) => (isMain ? '#1a1a1a' : '#fff')};
                font-weight: 200;
                line-height: 16px;
                font-size: 12px;
                text-align: center;
                margin: 7px 0;
            }
            .cartIcon {
                font-size: 20px;
                padding: 4px 3px 0 0;
                color: ${({ isMain }) => (isMain ? '#fff' : '#515151')};
                cursor: pointer;
            }
        }

        .search {
            display: flex;
            /* border: 1px solid ${({ isMain }) => (isMain ? '#fff' : '#515151')}; */
            color: ${({ isMain }) => (isMain ? '#fff' : '#515151')};
            /* width: 140px;
            height: 30px; */
            justify-content: space-between;
            line-height: 15px;
            /* gap: 45px; */
            /* padding: 0 9px 0 14px; */
            box-sizing: border-box;
            cursor: pointer;
        }
    }
`;
