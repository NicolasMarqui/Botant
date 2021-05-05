import "styled-components";

interface ThemeInterface {
    heading: string;
    background: string;
    body_dark: string;
    green_dark: string;
    green: string;
    green_light: string;
    body_light: string;
    shape: string;
    white: string;
    gray: string;
    blue: string;
    blue_light: string;
    red: string;
}

declare module "styled-components" {
    export interface DefaultTheme extends ThemeInterface {}
}
