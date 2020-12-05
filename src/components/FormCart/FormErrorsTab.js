import React from 'react';
import styled, { css } from 'styled-components';


export const FormErrorsTab = ({ errors }) => {

    const errorsList = Object.keys(errors).map(key => (
        <div key={key}>{key}: {errors[key]}</div>
    ));

    const isVisible = !!errorsList.length;

    return (
        <ErrorMessage visible={isVisible}>
            {errorsList}
        </ErrorMessage>
    )
}

const ErrorMessage = styled.div`
    padding: 10px;
    background-color: tomato;
    color: white;
    text-align: center;
    border-radius: 5px;
    margin-top: 15px;
    transition: all .3s ease-out;

    ${(props) => !props.visible && css`
        background-color: transparent;
    `}
`