import styled from 'styled-components';
const StyledButton = styled.button`
    background-color: rgba(255, 255, 255, 0.2);
    color: ${({ isActive }) => (isActive ? 'white' : 'gray')};
    border: 1px solid #fff;
    width: ${({ width }) => width || '270px'};
    height: ${({ height }) => height || '50px'};

    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
        color: black;
        background-color: rgba(255, 255, 255, 0.8);
        opacity: 0.9;
        transition: 0.3s ease-in-out;
    }
`;

const Button = ({ text = 'View Collection', width, height, onClick, isActive }) => {
    return (
        <StyledButton width={width} height={height} onClick={onClick} isActive={isActive}>
            {text}
        </StyledButton>
    );
};

export default Button;
