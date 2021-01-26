import React from 'react';
import styled from 'styled-components';
import {DataLevel1, DataLevel2, DataLevel3, DataLevel4, DataLevel5, DataLevel6} from '../../data/Data';

const H3 = styled.h3`
    color: #a9a9a9;
`;

const WordCountText = (props) => {
    const getData = (level, nowWordCount) => {
        switch(level) {
            case 1:
                return <H3>{nowWordCount} / {DataLevel1(0).length}</H3>
                break;
            case 2:
                return <H3>{nowWordCount} / {DataLevel2(0).length}</H3>
                break;
            case 3:
                return <H3>{nowWordCount} / {DataLevel3(0).length}</H3>
                break;
            case 4:
                return <H3>{nowWordCount} / {DataLevel4(0).length}</H3>
                break;
            case 5:
                return <H3>{nowWordCount} / {DataLevel5(0).length}</H3>
                break;
            case 6:
                return <H3>{nowWordCount} / {DataLevel6(0).length}</H3>
                break;
        }
    }

    return(
        <>
            {getData(props.nowPage, props.wordCount+1)}
        </>
    );
}

export default WordCountText;