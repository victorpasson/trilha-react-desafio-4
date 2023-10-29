import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: ${props => props.disabled === true ? '#81259D80' : '#81259D'};
    color: #FFF;

    border: 1px solid ${props => props.disabled === true ? '#81259D00' : '#81259D'};
    border-radius: 21px;

    &:hover {
        opacity: ${props => props.disabled === true ? 1 : 0.6};
        cursor: ${props => props.disabled === true ? null : 'pointer'};
    }


`