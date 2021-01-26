import React from 'react';
import styled from 'styled-components';
import TextNormal from '../atoms/TextNormal';
import SelectGameBar from '../organisms/SelectGameBar';
import EnglishBox from '../molecules/EnglishBox';
import NextWordBar from '../organisms/NextWordBar';
import EnglishList from '../organisms/EnglishList';

const MarginMin = styled.div`
    margin: 30px;
`;
const MarginBig = styled.div`
    margin: 60px;
`;

const PlayNow = (props) => {
    const movePages = (btnWordOn, btnWordListOn) => {
        if(btnWordOn) {
            return(
                <>
                    <EnglishBox EnglishWordOn={props.EnglishWordOn} changeEnglishOrJapanese={() => props.changeEnglishOrJapanese()}
                                nowPage={props.nowPage} wordCount={props.wordCount}/>
                    <MarginMin/>
                    <NextWordBar  changeWordPlus={() => props.changeWordPlus()} changeWordMinus={() => props.changeWordMinus()}/>
                </>
            );
        } else if(btnWordListOn) {
            return(
                <>
                    <EnglishList nowPage={props.nowPage}/>
                </>
            );
        }
    }

    let btnWordColor = 'none';
    let btnWordListColor = 'none';

    if(props.btnWordOn) {
        btnWordColor = '#404040';
    } else {
        btnWordColor = 'none';
    }
    if(props.btnWordListOn) {
        btnWordListColor = '#404040';
    } else {
        btnWordListColor = 'none';
    }

    return(
        <>
            <TextNormal title={props.level}>{props.detailsText}</TextNormal>

            <MarginBig/>

            <SelectGameBar btnWord={btnWordColor} btnWordList={btnWordListColor} changeBtnWordOrList={() => props.changeBtnWordOrList()}/>

            <MarginMin/>

            {movePages(props.btnWordOn, props.btnWordListOn)}
        </>
    );
}

export default PlayNow;