import React from 'react';
import styled from 'styled-components';
import {DataLevel1, DataLevel2, DataLevel3, DataLevel4, DataLevel5, DataLevel6} from '../../data/Data';

const H1 = styled.h1`
    padding-bottom: 24px;
    color: #c0c0c0;
    text-align: center;
    line-height: 200px;
    font-size: 38px;
`;

const EnglishBoxText = (props) => {
    const getData = (judg, level, num) => {
        let data = '';

        switch(level) {
            case 1:
                data = DataLevel1(judg)[num];
                break;
            case 2:
                data = DataLevel2(judg)[num];
                break;
            case 3:
                data = DataLevel3(judg)[num];
                break;
            case 4:
                data = DataLevel4(judg)[num];
                break;
            case 5:
                data = DataLevel5(judg)[num];
                break;
            case 6:
                data = DataLevel6(judg)[num];
                break;
        }

        return data;
    }
    const dataChange = (tg) => {
        if(tg) {
            return 0;
        } else {
            return 1;
        }
    }

    return(
        <>
            <H1>{getData(dataChange(props.EnglishWordOn), props.nowPage, props.wordCount)}</H1>
        </>
    );
}

export default EnglishBoxText;