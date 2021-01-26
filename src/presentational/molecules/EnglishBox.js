import React from 'react';
import styled from 'styled-components';
import EnglishBoxText from '../atoms/EnglishBoxText';
import WordCountBar from '../organisms/WordCountBar';

const Div = styled.div`
    border: solid 1px #c0c0c0;
`;

const EnglishBox = (props) => {
    return(
        <Div id={'EnglishTextBoxId'} onClick={props.changeEnglishOrJapanese}>
            <WordCountBar nowPage={props.nowPage} wordCount={props.wordCount}/>
            <EnglishBoxText EnglishWordOn={props.EnglishWordOn} nowPage={props.nowPage} wordCount={props.wordCount}></EnglishBoxText>
        </Div>
    );
}

export default EnglishBox;