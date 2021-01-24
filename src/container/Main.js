import React from 'react';
import styled from 'styled-components';
import SelectLevel from '../presentational/organisms/SelectLevel';
import PlayNow from '../presentational/organisms/PlayNow';

const Div = styled.div`
    // border: solid 2px blue;
    margin: 15px;
`;

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page : 0,
            btnWordOn: true,
            btnWordListOn: false,
            EnglishWordOn: true
        };
    }
    componentDidMount() {
        for(let i = 1; i < 7; i++) {
            let id = 'textBox' + i;
            document.getElementById(id).addEventListener('click', () => this.changeToPage(i));
        }
    }
    componentWillUnmount() {
        for(let i = 1; i < 7; i++) {
            let id = 'textBox' + i;
            document.getElementById(id).removeEventListener('click', () => this.changeToPage());
        }
    }

    movePages() {
        //this.state.page変数の値によって現在描画ページを制御
        console.log('now page : ' + this.state.page);
        switch(this.state.page) {
            case 0:
                return <SelectLevel/>
                break;
            case 1:
                console.log('aa : ' + this.state.EnglishWordOn);
                return <PlayNow level={'Level1'} detailsText={'中学一年生レベルの問題'} btnWordOn={this.state.btnWordOn} btnWordListOn={this.state.btnWordListOn} 
                        EnglishWordOn={this.state.EnglishWordOn} changeEnglishOrJapanese={() => this.changeEnglishOrJapanese()} changeBtnWordOrList={() => this.changeBtnWordOrList()}/>
                break;
            case 2:
                return <PlayNow level={'Level2'} detailsText={'中学卒業レベルの問題'} btnWordOn={this.state.btnWordOn} btnWordListOn={this.state.btnWordListOn} 
                        EnglishWordOn={this.state.EnglishWordOn} changeEnglishOrJapanese={() => this.changeEnglishOrJapanese()} changeBtnWordOrList={() => this.changeBtnWordOrList()}/>
                break;
            case 3:
                return <PlayNow level={'Level3'} detailsText={'高校卒業レベルの問題'} btnWordOn={this.state.btnWordOn} btnWordListOn={this.state.btnWordListOn} 
                        EnglishWordOn={this.state.EnglishWordOn} changeEnglishOrJapanese={() => this.changeEnglishOrJapanese()} changeBtnWordOrList={() => this.changeBtnWordOrList()}/>
                break;
        }
    }
    changeToPage = (toPage) => {
        //this.state.pageの値を引数の値へ更新する
        this.setState({
            page: toPage
        });
        console.log('changePage : ' + toPage);
    }
    changeBtnWordOrList = () => {
        //「単語帳」か「英単語一覧」か選択するstate
        this.setState({
            btnWordOn: !this.state.btnWordOn,
            btnWordListOn: !this.state.btnWordListOn
        });
        console.log('---change btn word---');
        console.log(this.state.btnWordOn);
        console.log(this.state.btnWordListOn);
        console.log('--------------------');
    }
    changeEnglishOrJapanese = () => {
        //英単語描画エリアの日本語訳か英単語を表示させるかの切り替え
        this.setState({
            EnglishWordOn: !this.state.EnglishWordOn
        });
        console.log('change english or japanese');
    }

    render() {
        return(
            <Div>
               {this.movePages()}
            </Div>
        );
    }
}

export default Main;