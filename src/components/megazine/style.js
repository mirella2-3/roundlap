import styled from 'styled-components';
export const MegazineListStyle = styled.div`
    margin: 160px 0px 160px 0px;

    .magazine-list {
        width: 1400px;
        flex-wrap: wrap;
        display: flex;
        justify-content: flex-start;
        gap: 50px 25px;
        margin-top: 80px;
    }
    .pagination {
        display: flex;
        justify-content: center;
    }
    /* margin: 130px 0px 160px 0px; */
`;
export const MegazineItemStyle = styled.div`
    width: 450px;
    /* height: 583px; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* margin-top: 30px; */

    .img-container {
        width: 450px;
        height: 450px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .text {
        width: 450px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h2 {
            width: 400px;
            font-size: 20px;
            font-weight: 600;
            color: #1a1a1a;
            margin-top: 24px;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 10px;
        }

        p {
            width: 420px;
            font-size: 16px;
            color: #8a8a8a;
            font-weight: 400;
            line-height: 130%;
            margin-bottom: 10px;
            text-align: left;

            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
        }
        span {
            /* display: block; */
            text-align: left;
            font-size: 14px;
            color: #8a8a8a;
            font-weight: 500;
            margin-bottom: 95px;
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
export const MegazineStyle = styled.div`
    .banner {
        position: relative;
        width: 1400px;
        height: 640px;
        display: flex;
        justify-content: space-between;
        .textbox {
            /* width: 581px; */
            margin-top: 396px;
            /* margin-right: 52px; */
            h2 {
                font-size: 32px;
                font-weight: 800;
                text-align: left;
                color: #1a1a1a;
                line-height: 42px;
                margin-bottom: 16px;
            }
            p {
                font-size: 16px;
                font-weight: 400;
                color: #8a8a8a;
                line-height: 140%;
                margin-bottom: 32px;
            }
            button {
                width: 160px;
                height: 38px;
                border: 1px solid #54afea;
                background: none;
                color: #54afea;
                font-size: 16px;
                font-weight: 500;
                transition: 0.3s;
                git branch &:hover {
                    background: #54afea;
                    color: #fff;
                }
            }
        }
    }
`;
