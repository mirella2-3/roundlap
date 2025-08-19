import styled from 'styled-components';

export const MegazineStyle = styled.div`
    .banner {
        position: relative;
        width: 1400px;
        height: 640px;
        display: flex;
        .textbox {
            width: 581px;
            margin-top: 396px;
            margin-right: 52px;
            h2 {
                font-size: 32px;
                font-weight: 700;
                text-align: left;
                margin-bottom: 0;
                color: #1a1a1a;
                margin-bottom: 16px;
            }
            p {
                margin-bottom: 32px;
            }
            button {
                width: 160px;
                height: 38px;
                border: 1px solid #54afea;
                background: none;
                color: #54afea;
                font-size: 16px;
                font-weight: medium;
                &:hover {
                    background: #54afea;
                    color: white;
                }
            }
        }
        .imeagebox {
            margin-top: 38px;
        }
    }
`;
