import styled from 'styled-components';

export const PaginationStyle = styled.div`
    div {
        margin-top: 100px;
        text-align: center;

        button {
            width: 40px;
            height: 40px;

            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            color: #515151;
            vertical-align: middle;

            margin-right: 8px;
            background: #fff;

            &.on {
                color: #007bcc;
            }
            &:hover {
                background: #e6f3fc;
            }

            &:first-child {
                width: auto;
                font-weight: 600;
                &:hover {
                    background: #fff;
                }
            }
            &:last-child {
                width: auto;
                font-weight: 600;
                &:hover {
                    background: #fff;
                }
            }
        }
    }
`;
