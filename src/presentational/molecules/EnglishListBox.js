import React from 'react';
import styled from 'styled-components';
import EnglishListText from '../atoms/EnglishListText';

const Div = styled.div`
    width: 50%;
`;

const EnglishListBox = (props) => {
    return(
        <Div>
            <EnglishListText title={'title'}/>
        </Div>
    );
}

export default EnglishListBox;