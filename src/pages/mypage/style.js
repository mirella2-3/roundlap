import styled from 'styled-components';

export const MypageStyle = styled.div`
    color: #515151;
    .inner {
        margin: 160px auto;
    }
    h2 {
        color: #1a1a1a;
        font-size: 36px;
        font-weight: 700;
    }
    .line {
        height: 1px;
        width: 100%;
        background: #e3e3e3;
    }

    section {
        margin-bottom: 80px;
    }

    .namePoint {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        div:first-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
                width: 50px;
                height: 50px;
                background: #d9d9d9;
                border-radius: 50px;
            }
        }

        strong {
            margin-left: 12px;
            margin-right: 2px;
            color: #007bcc;
            font-weight: 700;
            font-size: 20px;
        }

        span {
            margin-left: 80px;
            margin-right: 10px;
            color: #007bcc;
            font-size: 20px;
            font-weight: 700;
            border-bottom: 1px solid #007bcc;
        }
    }
`;
