import { css } from 'styled-components';
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
        font-size: 3vw;
        letter-spacing: 2px;
    `,
    default: css`
        font-family: 'Roboto', sans-serif;
        letter-spacing: 1px;
    `,
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

export const colorAdjust = {
    darken: (color, amount) =>
        Color(color)
            .darken(amount)
            .string(),
    lighten: (color, amount) =>
        Color(color)
            .lighten(amount)
            .string(),
    rgba: (color, opacity) =>
        Color(color)
            .alpha(opacity)
            .string()
};

