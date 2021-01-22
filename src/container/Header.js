import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    // border: solid 2px orange;
    background-color: #303030;
    padding: 0 20px;
`;
const H1 = styled.h1`
    font-family: 'HG正楷書体-PRO';
    color: #87ceeb;
    font-size: 24px;
    font-weight: normal;
    line-height: 50px;
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        return(
            <Div>
                <H1>web英単語</H1>
            </Div>
        );
    }
}

export default Header;