import React from 'react';
import styled from 'styled-components';
import SelectLevel from '../presentational/organisms/SelectLevel';

const Div = styled.div`
    // border: solid 2px blue;
    margin: 15px;
`;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page : 1
        };
    }

    movePages() {
        //this.state.page変数の値によって現在描画ページを制御
        if(this.state.page == 1) {
            return <SelectLevel />
        }
    }
    changePage(toPage) {
        //this.state.pageの値を引数に渡された値にする
        this.setState({
            page: toPage
        });
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