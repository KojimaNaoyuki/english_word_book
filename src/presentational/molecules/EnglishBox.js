import React from 'react';
import styled from 'styled-components';
import EnglishBoxText from '../atoms/EnglishBoxText';

const Div = styled.div`
    border: solid 1px #c0c0c0;
`;

const EnglishBox = (props) => {
    return(
        <Div id={'EnglishTextBoxId'} onClick={props.changeEnglishOrJapanese}>
            <EnglishBoxText EnglishWordOn={props.EnglishWordOn}></EnglishBoxText>
        </Div>
    );
}

export default EnglishBox;