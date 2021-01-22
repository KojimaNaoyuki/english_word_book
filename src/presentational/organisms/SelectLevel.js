import React from 'react';
import styled from 'styled-components';
import TextBox from '../molecules/TextBox';
import TextNormal from '../atoms/TextNormal';

const MarginMin = styled.div`
    margin: 30px;
`;

const SelectLevel = (props) => {
    return(
        <>
            <TextNormal title={'web英単語にようこそ'}>
                web英単語では、まるで英単語帳を見ているかのような感覚で英単語学習が行えます。<br/>
                レベル別のページを選択して今すぐstudy!!
            </TextNormal>

            <MarginMin/>

            <TextBox title={'Level 1'}>
                中学一年生レベルの問題
            </TextBox>

            <MarginMin/>

            <TextBox title={'Level 2'}>
                中学卒業レベルの問題
            </TextBox>

            <MarginMin/>

            <TextBox title={'Level 3'}>
                高校卒業レベルの問題
            </TextBox>

            <MarginMin/>

            <TextBox title={'Level 4'}>
                大学入試レベルの問題
            </TextBox>

            <MarginMin/>
            
            <TextBox title={'Level 5'}>
                大学卒業レベルの問題
            </TextBox>

            <MarginMin/>
            
            <TextBox title={'Level 6'}>
                ネイティブレベルの問題
            </TextBox>
        </>
    );
}

export default SelectLevel;