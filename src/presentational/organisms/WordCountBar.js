import React from 'react';
import styled from 'styled-components';
import WordCountText from '../atoms/WordCountText';

const Div = styled.div`
    text-align: right;
    padding: 0 10px;
`;

const WordCountBar = (props) => {
    return(
        <Div>
            <WordCountText nowPage={props.nowPage} wordCount={props.wordCount}/>
        </Div>
    );
}

export default WordCountBar;