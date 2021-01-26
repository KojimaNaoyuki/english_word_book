import React from 'react';
import styled from 'styled-components';
import {DataLevel1, DataLevel2, DataLevel3, DataLevel4, DataLevel5, DataLevel6} from '../../data/Data';

const H2 = styled.h2`
    color: #c0c0c0;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    text-decoration: underline;
`;
const H3 = styled.h3`
    color: #a9a9a9;
    font-size: 18px;
    text-align: center;
    line-height: 30px;
`;
const MarginMinMin = styled.div`
    margin: 10px;
`;

const EnglishListText = (props) => {
    const getData = (judg, level) => {
        let data = [];

        switch(level) {
            case 1:
                for(let item of DataLevel1(judg)) {
                    data.push(<H3>{item}</H3>);
                }
                break;
            case 2:
                for(let item of DataLevel2(judg)) {
                    data.push(<H3>{item}</H3>);
                }
                break;
            case 3:
                for(let item of DataLevel3(judg)) {
                    data.push(<H3>{item}</H3>);
                }
                break;
            case 4:
                for(let item of DataLevel4(judg)) {
                    data.push(<H3>{item}</H3>);
                }
                break;
            case 5:
                for(let item of DataLevel5(judg)) {
                    data.push(<H3>{item}</H3>);
                }
                break;
            case 6:
                for(let item of DataLevel6(judg)) {
                    data.push(<H3>{item}</H3>);
                }
                break;
        }

        return data;
    }

    return(
        <>
            <H2>{props.title}</H2>
            <MarginMinMin/>
            {getData(props.textEnglishOrJapanese, props.nowPage)}
        </>
    );
}

export default EnglishListText;