import { css } from '@emotion/react';

export const colors = {
    black: '#010101',
    primary: 'rgb(255, 104, 31);',
    primaryHover: '#022B6B',
    secondary: '#F20000',
    secondaryHover: '#cf0000',
    green: '#26AE50',
    yellow: '#FAB234',
    red: '#e91e63',
    greys: {
        label: '#8E8E93',
        placeholdersIcons: '#BCBCBD',
        dividersDisabled: '#D2D2D2',
        bordersBg: '#E4E4E5',
        bg: '#EBECEC',
        bgHover: '#F5F5F5',
    },
};

export const device = {
    mobileS: `(min-width: 320px)`,
    mobileM: `(min-width: 375px)`,
    mobileL: `(min-width: 425px)`,
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    laptopL: `(min-width: 1440px)`,
    desktop: `(min-width: 2560px)`,
};

export const flex = (
    $justify: string | null = null,
    $align: string | null = null,
    $direction: string | null = null
) => css`
    display: flex;
    flex-direction: ${$direction};
    justify-content: ${$justify};
    align-items: ${$align};
`;
