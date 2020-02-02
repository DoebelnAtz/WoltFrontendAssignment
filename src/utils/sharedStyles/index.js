import Styled, { css } from 'styled-components';
import Color from 'color';

export const color = {
    primary: '#439cdb',
    siteBG: '#fff',
    siteBG1: Color('#fff').darken(0.1).string(),
    siteBG2: Color('#fff').darken(0.2).string(),
    siteBG3: Color('#fff').darken(0.3).string(),
};

export const font = {
    title: css`
        font-family: 'Roboto', sans-serif;
        font-size:36px;
        letter-spacing: 2px;
    `
};

export const layout = {
    row: css`
        display: flex;
        flex-wrap: wrap;
    `,
    col: css`
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    `,
};

export const cursor = {
    clickable: css`
      cursor: pointer;
      user-select: none;
    `,

};

