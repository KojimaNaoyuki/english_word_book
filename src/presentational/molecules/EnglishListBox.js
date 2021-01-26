import React from 'react';
import styled from 'styled-components';
import EnglishListText from '../atoms/EnglishListText';

const Div = styled.div`
    width: 50%;
`;

const EnglishListBox = (props) => {
    return(
        <Div>
            <EnglishListText title={props.title} textEnglishOrJapanese={props.textEnglishOrJapanese} nowPage={props.nowPage}/>
        </Div>
    );
}

export default EnglishListBox;