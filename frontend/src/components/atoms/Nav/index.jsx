import React , { Component, useState } from 'react';
import styled from 'styled-components';

const NavArea = styled.nav`
    display: ${props => props.expanded == true ? "none" : "block"};
`;

const NavList = styled.ul`

`;
const NavItems = styled.li`

`;

export const Nav = ({
    open,
    setOpen,
}) => {
    return (
        <NavArea expanded={open}>
            <NavList>
                <NavItems>トップページ</NavItems>
                <NavItems>一品料理投稿画面</NavItems>
                <NavItems>マイページ</NavItems>
            </NavList>
        </NavArea>
    );
};
