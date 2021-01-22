import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    padding-left: 10px;
    font-size: 18px;
    line-height: 40px;
    text-decoration: underline;
    color: #c0c0c0;
`;
const P = styled.p`
    width: 100%;
    word-break: break-all;
    line-height: 25px;
    color: #a9a9a9;
`;

const TextNormal = (props) => {
    return(
        <>
            <H2>{props.title}</H2>
            <P>{props.children}</P>
        </>
    );
}

export default TextNormal;