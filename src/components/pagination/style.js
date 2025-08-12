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
            color: #515151;
            vertical-align: middle;

            margin-right: 8px;
            background: #fff;

            &:first-child {
                width: auto;
            }
            &:last-child {
                width: auto;
            }

            &.on {
                color: #007bcc;
            }
        }
    }
`;
