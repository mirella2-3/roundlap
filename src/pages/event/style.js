import styled from 'styled-components';

export const EventStyle = styled.div`
    .engTitle {
        font-family: 'YUniverse-B';
    }
    .inner {
        padding-top: 100px;
        text-align: center;

        h1 {
            display: inline-block;
            margin: 0 auto;
            font-weight: 700;
            color: #1a1a1a;
            font-size: 48px;
            margin-bottom: 80px;
        }
        .product-tabs {
            font-size: 20px;
            color: #515151;
            display: flex;
            margin: auto 0;
            gap: 40px;
            justify-content: center;

            > div {
                /* width: 50px; */
                text-align: center;
                padding: 14px 0px;
                position: relative;
                cursor: pointer;
                transition: color 0.3s ease;
                &:hover {
                    color: #333;
                }
                &::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 50%;
                    transform: translateX(-50%) scaleX(0);
                    transform-origin: center;
                    width: 100%;
                    height: 3px;
                    background: #007bcc;
                    transition: transform 0.3s ease;
                    display: block;
                }

                &:hover::after {
                    transform: translateX(-50%) scaleX(1);
                }

                &.active-tab {
                    font-weight: 700;

                    &::after {
                        width: 100%;
                        transform: translateX(-50%) scaleX(1);
                    }
                }
            }
        }
        .line {
            height: 1px;
            width: 100%;
            background: #e3e3e3;
            margin-bottom: 80px;
        }
    }
`;
