import styled from 'styled-components';

export const NoticeSearchWrap = styled.div``;

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
            width: 100px;
        }
        .title {
            width: auto;
        }
        .date {
            width: 140px;
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
            }
        }
    }
`;
