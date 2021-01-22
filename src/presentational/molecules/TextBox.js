import React from 'react';
import styled from 'styled-components';
import TextNormal from '../atoms/TextNormal';

const Div = styled.div`
    padding: 10px;
    border: solid 1px #c0c0c0;
    background-color: #303030;
    box-shadow: 4px 4px 3px #505050;
`;

const TextBox = (props) => {
    return(
        <Div>
            <TextNormal title={props.title}>{props.children}</TextNormal>
        </Div>
    );
}

export default TextBox;