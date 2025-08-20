import styled from 'styled-components';
export const EventListStyle = styled.div`
    .Event-list {
        width: 1394px;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
    .pagination {
        display: flex;
        justify-content: center;
    }
    margin: 130px 0px 160px 0px;
`;
export const EventItemStyle = styled.div`
    width: 450px;
    height: 506px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .img-container {
        width: 450px;
        height: 322px;
        img {
            width: 450px;
            height: 322px;
            object-fit: cover;
        }
    }
    .text {
        h2 {
            font-size: 20px;
            font-weight: 600;
            color: #1a1a1a;
            margin-top: 28px;
            text-align: left;
            width: 100%;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
            margin-bottom: 10px;
        }

        p {
            width: 420px;
            font-size: 16px;
            color: #8a8a8a;
            font-weight: 500;
            line-height: 130%;
            margin-bottom: 10px;
            width: 420px;
            height: 42px;
            text-align: left;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
        }
        span {
            display: block;
            text-align: left;
            font-size: 14px;
            color: #8a8a8a;
            font-weight: 500;
        }
    }
`;
export const PageButton = styled.button`
    width: 40px;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    background: white;
    color: ${(props) => (props.active ? '#007BCC' : '#000')};
    border: none;
    cursor: pointer;

    &:hover {
        background: #e6f3fc;
        color: #515151;
    }
`;
export const PrevButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 500;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;
export const NextButton = styled.button`
    width: 64px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 500;

    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
export const EventStyle = styled.div`
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
