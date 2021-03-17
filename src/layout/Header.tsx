import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from '@emotion/react';
import { colors, flex } from '@styles/theme';

function Header() {
    return (
        <>
            <nav css={nav}>
                <NavLink exact={true} activeClassName="is-active" to="/">
                    HOME
                </NavLink>
                <NavLink activeClassName="is-active" to="/todos">
                    TODOS
                </NavLink>
            </nav>
        </>
    );
}

export default Header;

const nav = css`
    ${flex('flex-start', 'center')}
    padding-left: 100px;
    padding-top: 14px;

    a {
        padding: 20px 16px 10px;
        color: ${colors.greys.placeholdersIcons};
    }

    a.is-active {
        color: ${colors.green};
        border-bottom: 3px solid ${colors.green};
    }
`;
