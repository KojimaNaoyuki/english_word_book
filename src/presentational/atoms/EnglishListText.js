import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    color: #c0c0c0;
    text-align: center;
    line-height: 40px;
    font-size: 24px;
`;
const H3 = styled.h3`
    color: #a9a9a9;
    font-size: 18px;
    text-align: center;
    line-height: 30px;
`;

const EnglishListText = (props) => {
    return(
        <>
            <H2>{props.title}</H2>
            <H3>dog</H3>
            <H3>dog</H3>
            <H3>dog</H3>
            <H3>dog</H3>
            <H3>dog</H3>
            <H3>dog</H3>
        </>
    );
}

export default EnglishListText;