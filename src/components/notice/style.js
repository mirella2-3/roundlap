import styled from 'styled-components';

export const NoticeSearchWrap = styled.div`
    margin-bottom: 30px;
    form {
        text-align: right;
        p {
            margin-left: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 266px;
            height: 42px;
            border: 1px solid #c2c2c2;

            box-sizing: border-box;
            padding: 0px 20px;

            input[type='text'] {
                width: 200px;
                height: 38px;
                border: none;
                outline: none;
                font-family: 'Pretendard';
                font-size: 16px;
                font-weight: 400;
                color: #1a1a1a;
                &::placeholder {
                    color: #c2c2c2;
                }
            }
        }
    }
`;

export const NoticeListStyle = styled.div`
    .noticeTable {
        width: 1400px;
        caption {
            position: absolute;
            left: 0;
            top: 0;
            text-indent: -9999px;
        }

        .num {
            width: 80px;
        }
        .title {
            width: auto;
        }
        .date {
            width: 150px;
        }
        td {
            height: 70px;
            vertical-align: middle;
            font-size: 18px;
            font-weight: 400;
            color: #8a8a8a;
            border-bottom: 1px solid #e3e3e3;
            text-align: center;
            &:nth-child(2) {
                text-align: left;
                padding-left: 20px;
                font-weight: 500;
                color: #515151;

                cursor: pointer;

                &:hover {
                    font-weight: 700;
                }
            }
            &:nth-child(3) {
                text-align: right;
                padding-right: 26px;
            }
        }
    }
`;
