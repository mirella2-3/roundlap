import styled from 'styled-components';

export const FaqListStyle = styled.div`
    dl {
        width: 1400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #ececec;

        margin-bottom: 12px;
        &.on {
            border: none;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            .question {
                p {
                    font-weight: 700;
                }
            }
        }

        dt {
            width: 1400px;
            height: 75px;
            box-sizing: border-box;
            padding: 0px 40px 0px 104px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            font-size: 20px;
            font-weight: 500;

            cursor: pointer;

            .question {
                display: flex;
                span {
                    font-weight: 700;
                    color: #007bcc;
                    margin-right: 5px;
                }
            }

            img {
                text-align: right;
            }

            &:hover {
                .question {
                    p {
                        font-weight: 700;
                    }
                }
            }
        }
        dd {
            width: 1380px;
            box-sizing: border-box;
            padding: 58px 94px;
            background-color: #e6f3fc;
            margin-bottom: 10px;

            font-size: 18px;
        }
    }
`;
