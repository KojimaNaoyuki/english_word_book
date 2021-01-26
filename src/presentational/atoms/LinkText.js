import React from 'react';
import styled from 'styled-components';

const P = styled.p`
    color: #4682b4;
    padding-left: 6px;
    text-decoration: underline;
`;

const LinkText = (props) => {
    return(
        <P onClick={props.clickedFnction}>{props.pageName}</P>
    );
}

export default LinkText;