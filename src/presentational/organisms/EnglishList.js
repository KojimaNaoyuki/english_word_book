import React from 'react';
import styled from 'styled-components';
import EnglishListBox from '../molecules/EnglishListBox';

const Div = styled.div`
    padding: 10px 0;
    display: flex;
    border: solid 1px #c0c0c0;
`;

const EnglishList = (props) => {
    return(
        <Div>
            <EnglishListBox textEnglishOrJapanese={0} title={'英単語'} nowPage={props.nowPage}/>
            <EnglishListBox textEnglishOrJapanese={1} title={'日本語訳'} nowPage={props.nowPage}/>
        </Div>
    );
}

export default EnglishList;