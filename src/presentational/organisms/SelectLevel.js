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

            <TextBox title={'Level 1'} id={'textBox1'} changePage={() => props.changePage1()}>
                中学一年生レベルの問題
            </TextBox>

            <MarginMin/>

            <TextBox title={'Level 2'} id={'textBox2'} changePage={() => props.changePage2()}>
                中学卒業レベルの問題
            </TextBox>

            <MarginMin/>

            <TextBox title={'Level 3'} id={'textBox3'} changePage={() => props.changePage3()}>
                高校卒業レベルの問題
            </TextBox>

            <MarginMin/>

            <TextBox title={'Level 4'} id={'textBox4'} changePage={() => props.changePage4()}>
                大学入試レベルの問題
            </TextBox>

            <MarginMin/>
            
            <TextBox title={'Level 5'} id={'textBox5'} changePage={() => props.changePage5()}>
                大学卒業レベルの問題
            </TextBox>

            <MarginMin/>
            
            <TextBox title={'Level 6'} id={'textBox6'} changePage={() => props.changePage6()}>
                ネイティブレベルの問題
            </TextBox>
        </>
    );
}

export default SelectLevel;