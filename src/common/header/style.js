import styled from 'styled-components';
export const HeaderStyle = styled.header`
    background: #000;
    .inner {
        height: 120px;
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
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        gap: 167px;

        .MainMenu {
            display: flex;
            gap: 7px;

            a {
                border: 1px solid red;
                padding: 10px;
                color: #fff;
                font-size: 18px;
                font-weight: 500;
                &:hover {
                    color: #007bcc;
                    /* font-weight: 600; */
                }
            }

            .subMenu {
                display: none;
            }
        }
        .topMenu {
            display: flex;
            gap: 12px;
            font-size: 16px;
            font-weight: 500;
            height: 30px;

            align-items: center;

            a {
                color: #fff;
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
                        background: #fff;
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
                    background: #fff;
                    width: 16px;
                    height: 16px;
                    border-radius: 16px;
                    color: #000;
                    font-size: 12px;
                    text-align: center;
                    margin: 7px 0;
                }
                .cartIcon {
                    font-size: 20px;
                    padding: 4px 3px 0 0;
                    color: #fff;
                }
            }

            .search {
                display: flex;
                border: 1px solid #fff;
                color: #fff;
                width: 140px;
                height: 30px;
                justify-content: space-between;
                line-height: 30px;
                gap: 45px;
                padding: 0 9px 0 14px;
                box-sizing: border-box;
            }
        }
    }
`;
