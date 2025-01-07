import styled from '@emotion/styled';

interface MainButtonProps {
    disabled: boolean;
    backgroundColor?: string;
}

export const MainButton = styled.button<MainButtonProps>`
    width: 100%;
    height: 70px;
    outline: none;
    border: none;
    padding: 20px;
    background: ${({disabled, backgroundColor}) => disabled ? '#b8b6ae' : (backgroundColor || '#1f27f5')};
    border-radius: 4px;
    color: white;
    font-family: Lato, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    cursor: ${({disabled}) => disabled ? 'auto' : 'pointer'};
`;