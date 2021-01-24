import React from 'react';
import styled from 'styled-components';

const Btn = styled.h2`
    width: 5em;
    border: solid 1px #c0c0c0;
    color: #c0c0c0;
    text-align: center;
    line-height: 50px;
    font-size: 22px;
`;
const Div = styled.div`
    display: flex;
    justify-content: center;
`;
const MarginMin = styled.div`
    margin: 30px;
`;

const NextWordBar = (props) => {
    return(
        <Div>
            <Btn>Back</Btn> <MarginMin/> <Btn>Next</Btn>
        </Div>
    );
}

export default NextWordBar;