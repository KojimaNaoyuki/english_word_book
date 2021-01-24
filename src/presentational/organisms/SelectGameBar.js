import React from 'react';
import styled from 'styled-components';
import SelectGameBtn from '../atoms/SelectGameBtn';

const Div = styled.div`
    display: flex;
    justify-content: center;
    border: solid 1px #c0c0c0;
`;

const SelectGameBar = (props) => {
    return(
        <Div onClick={props.changeBtnWordOrList}>
            <SelectGameBtn btnName={'単語帳'}  btnBackColor={props.btnWord} id={'btnWord'}/>
            <SelectGameBtn btnName={'英単語一覧'} btnBackColor={props.btnWordList} id={'btnWordList'}/>
        </Div>
    );
}

export default SelectGameBar;