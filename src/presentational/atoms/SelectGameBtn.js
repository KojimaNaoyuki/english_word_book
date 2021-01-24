import React from 'react';
import styled from 'styled-components';


const SelectGameBtn = (props) => {
    const btnColor = props.btnBackColor;
    
    const Btn = styled.h3`
        width: 50%;
        border: solid 1px #b0b0b0;
        color: #c0c0c0;
        line-height: 34px;
        text-align: center;
        background-color: ${btnColor};
    `;

    return(
        <Btn id={props.id}>{props.btnName}</Btn>
    );
}

export default SelectGameBtn;