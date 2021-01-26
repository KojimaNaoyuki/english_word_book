import React from 'react';
import styled from 'styled-components';
import LinkText from '../atoms/LinkText';

const Div = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const LinkList = (props) => {
    return(
        <Div>
            <LinkText pageName={props.pageName1} clickedFnction={() => props.clickedFnction1()}/>
            <LinkText pageName={props.pageName2} clickedFnction={() => props.clickedFnction1()}/>
            
            {/* <LinkText pageName={props.pageName3} clickedFnction={() => props.clickedFnction3()}/>
            <LinkText pageName={props.pageName4} clickedFnction={() => props.clickedFnction4()}/>
            <LinkText pageName={props.pageName5} clickedFnction={() => props.clickedFnction5()}/> */}
        </Div>
    );
}

export default LinkList;