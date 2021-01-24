import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    color: #c0c0c0;
    text-align: center;
    line-height: 200px;
    font-size: 38px;
`;

const EnglishBoxText = (props) => {
    const EnglishOrJapanese = (EnglishWordOn) => {
        console.log('test : ' + EnglishWordOn);
        let text = '';
        if(EnglishWordOn) {
            text = 'dog';
        } else if(!EnglishWordOn) {
            text = '犬';
        }
        return text;
    }

    return(
        <>
            <H1>{EnglishOrJapanese(props.EnglishWordOn)}</H1>
        </>
    );
}

export default EnglishBoxText;