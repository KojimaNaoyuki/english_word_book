import React from 'react';
import styled from 'styled-components';
import SelectLevel from '../presentational/organisms/SelectLevel';
import PlayNow from '../presentational/organisms/PlayNow';
import LinkList from '../presentational/organisms/LinkList';
import {DataLevel1, DataLevel2, DataLevel3, DataLevel4, DataLevel5, DataLevel6} from '../data/Data';

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
            EnglishWordOn: true,
            wordCount: 0
        };
    }

    movePages() {
        //this.state.page変数の値によって現在描画ページを制御
        console.log('now page : ' + this.state.page);
        switch(this.state.page) {
            case 0:
                return(
                    <>
                        <LinkList pageName1={'Top'} clickedFnction1={() => this.stateInit()}/>
                        <SelectLevel changePage1={() => this.changePage1()} changePage2={() => this.changePage2()} changePage3={() => this.changePage3()}
                                     changePage4={() => this.changePage4()} changePage5={() => this.changePage5()} changePage6={() => this.changePage6()}/>
                    </>
                )
                break;
            case 1:
                return(
                    <>
                        <LinkList pageName1={'Top /'} pageName2={'level1'} clickedFnction1={() => this.stateInit()}/>
                        <PlayNow level={'Level1'} detailsText={'中学一年生レベルの問題'} btnWordOn={this.state.btnWordOn} btnWordListOn={this.state.btnWordListOn} 
                                 EnglishWordOn={this.state.EnglishWordOn} changeEnglishOrJapanese={() => this.changeEnglishOrJapanese()} changeBtnWordOrList={() => this.changeBtnWordOrList()} 
                                 nowPage={this.state.page} wordCount={this.state.wordCount} changeWordPlus={() => this.changeWordPlus()} changeWordMinus={() => this.changeWordMinus()}/>
                    </>
                )
                break;
            case 2:
                return(
                    <>
                        <LinkList pageName1={'Top /'} pageName2={'level2'} clickedFnction1={() => this.stateInit()}/>
                        <PlayNow level={'Level2'} detailsText={'中学卒業レベルの問題'} btnWordOn={this.state.btnWordOn} btnWordListOn={this.state.btnWordListOn} 
                                 EnglishWordOn={this.state.EnglishWordOn} changeEnglishOrJapanese={() => this.changeEnglishOrJapanese()} changeBtnWordOrList={() => this.changeBtnWordOrList()} 
                                 nowPage={this.state.page}  wordCount={this.state.wordCount} changeWordPlus={() => this.changeWordPlus()} changeWordMinus={() => this.changeWordMinus()}/>
                    </>
                );
                break;
            case 3:
                return(
                    <>
                        <LinkList pageName1={'Top /'} pageName2={'level3'} clickedFnction1={() => this.stateInit()}/>
                        <PlayNow level={'Level3'} detailsText={'高校卒業レベルの問題'} btnWordOn={this.state.btnWordOn} btnWordListOn={this.state.btnWordListOn} 
                                 EnglishWordOn={this.state.EnglishWordOn} changeEnglishOrJapanese={() => this.changeEnglishOrJapanese()} changeBtnWordOrList={() => this.changeBtnWordOrList()} 
                                 nowPage={this.state.page}  wordCount={this.state.wordCount} changeWordPlus={() => this.changeWordPlus()} changeWordMinus={() => this.changeWordMinus()}/>
                    </>
                ); 
                break;
            case 4:
                return(
                    <>
                        <LinkList pageName1={'Top /'} pageName2={'level4'} clickedFnction1={() => this.stateInit()}/>
                        <PlayNow level={'Level4'} detailsText={'大学入試レベルの問題'} btnWordOn={this.state.btnWordOn} btnWordListOn={this.state.btnWordListOn} 
                                 EnglishWordOn={this.state.EnglishWordOn} changeEnglishOrJapanese={() => this.changeEnglishOrJapanese()} changeBtnWordOrList={() => this.changeBtnWordOrList()} 
                                 nowPage={this.state.page}  wordCount={this.state.wordCount} changeWordPlus={() => this.changeWordPlus()} changeWordMinus={() => this.changeWordMinus()}/>
                    </>
                );
            case 5:
                return(
                    <>
                        <LinkList pageName1={'Top /'} pageName2={'level5'} clickedFnction1={() => this.stateInit()}/>
                        <PlayNow level={'Level5'} detailsText={'大学卒業レベルの問題'} btnWordOn={this.state.btnWordOn} btnWordListOn={this.state.btnWordListOn} 
                                 EnglishWordOn={this.state.EnglishWordOn} changeEnglishOrJapanese={() => this.changeEnglishOrJapanese()} changeBtnWordOrList={() => this.changeBtnWordOrList()} 
                                 nowPage={this.state.page}  wordCount={this.state.wordCount} changeWordPlus={() => this.changeWordPlus()} changeWordMinus={() => this.changeWordMinus()}/>
                    </>
                );
            case 6:
                return(
                    <>
                        <LinkList pageName1={'Top /'} pageName2={'level6'} clickedFnction1={() => this.stateInit()}/>
                        <PlayNow level={'Level6'} detailsText={'ネイティブレベルの問題'} btnWordOn={this.state.btnWordOn} btnWordListOn={this.state.btnWordListOn} 
                                 EnglishWordOn={this.state.EnglishWordOn} changeEnglishOrJapanese={() => this.changeEnglishOrJapanese()} changeBtnWordOrList={() => this.changeBtnWordOrList()} 
                                 nowPage={this.state.page}  wordCount={this.state.wordCount} changeWordPlus={() => this.changeWordPlus()} changeWordMinus={() => this.changeWordMinus()}/>
                    </>
                );
        }
    }
    changeToPage = (toPage) => {
        //this.state.pageの値を引数の値へ更新する
        this.setState({
            page: toPage
        });
        console.log('changePage : ' + toPage);
    }
    changePage1 = () => {
        this.setState({
            page: 1
        });
        console.log('page 1');
    }
    changePage2 = () => {
        this.setState({
            page: 2
        });
        console.log('page 2');
    }
    changePage3 = () => {
        this.setState({
            page: 3
        });
        console.log('page 3');
    }
    changePage4 = () => {
        this.setState({
            page: 4
        });
        console.log('page 4');
    }
    changePage5 = () => {
        this.setState({
            page: 5
        });
        console.log('page 5');
    }
    changePage6 = () => {
        this.setState({
            page: 6
        });
        console.log('page 6');
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
    changeWordPlus = () => {
        //英単語の表示の切り替え
        switch(this.state.page) {
            case 1:
                if(this.state.wordCount+1 < DataLevel1(0).length) {
                    this.setState({
                        EnglishWordOn: true,
                        wordCount: this.state.wordCount + 1
                    });
                    console.log('change wordCound Plus : ' + this.state.wordCount);
                } else {
                    console.log('wordCount is max over');
                }
                break;
            case 2:
                if(this.state.wordCount+1 < DataLevel2(0).length) {
                    this.setState({
                        EnglishWordOn: true,
                        wordCount: this.state.wordCount + 1
                    });
                    console.log('change wordCound Plus : ' + this.state.wordCount);
                } else {
                    console.log('wordCount is max over');
                }
                break;
            case 3:
                if(this.state.wordCount+1 < DataLevel3(0).length) {
                    this.setState({
                        EnglishWordOn: true,
                        wordCount: this.state.wordCount + 1
                    });
                    console.log('change wordCound Plus : ' + this.state.wordCount);
                } else {
                    console.log('wordCount is max over');
                }
                break;
            case 4:
                if(this.state.wordCount+1 < DataLevel4(0).length) {
                    this.setState({
                        EnglishWordOn: true,
                        wordCount: this.state.wordCount + 1
                    });
                    console.log('change wordCound Plus : ' + this.state.wordCount);
                } else {
                    console.log('wordCount is max over');
                }
                break;
            case 5:
                if(this.state.wordCount+1 < DataLevel5(0).length) {
                    this.setState({
                        EnglishWordOn: true,
                        wordCount: this.state.wordCount + 1
                    });
                    console.log('change wordCound Plus : ' + this.state.wordCount);
                } else {
                    console.log('wordCount is max over');
                }
                break;
            case 6:
                if(this.state.wordCount+1 < DataLevel6(0).length) {
                    this.setState({
                        EnglishWordOn: true,
                        wordCount: this.state.wordCount + 1
                    });
                    console.log('change wordCound Plus : ' + this.state.wordCount);
                } else {
                    console.log('wordCount is max over');
                }
                break;
            default:
                console.log('error');
        }
    }
    changeWordMinus = () => {
        //英単語の表示の切り替え
        if(this.state.wordCount != 0) {
            this.setState({
                EnglishWordOn: true,
                wordCount: this.state.wordCount - 1
            });
        } else {
            console.log('wordCound is under zero');
        }
        console.log('change wordCound Minus : ' + this.state.wordCount);
    }
    stateInit = () => {
        //stateの初期化
        this.setState({
            page : 0,
            btnWordOn: true,
            btnWordListOn: false,
            EnglishWordOn: true,
            wordCount: 0
        });
        console.log('state is init');
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