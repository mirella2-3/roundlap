import styled from 'styled-components';

export const PaySucessStyles = styled.div`
    .inner {
        width: 1400px;
        margin: auto;
        box-sizing: border-box;
        position: relative;
        .checkbox {
            margin-top: 214px;
            margin-bottom: 50px;
            display: flex;
            justify-content: center;
            img {
                width: 64px;
                height: 64px;
                object-fit: contain;
            }
        }
        .check-text {
            margin-bottom: 120px;
            h2 {
                font-size: 36px;
                font-weight: 600;
                margin-bottom: 14px;
            }
            h3 {
                text-align: center;
            }
        }
        .buttons {
            margin-bottom: 175px;
            display: flex;
            justify-content: center;
            button[type='submit'] {
                width: 160px;
                height: 38px;

                font-size: 18px;
                font-weight: 400;
                background-color: #515151;
                color: white;
                border: none;
                cursor: pointer;
                text-align: center;
                margin-right: 10px;

                &:hover {
                    background-color: #54afea;
                    color: white;
                }
            }
        }
    }
`;
