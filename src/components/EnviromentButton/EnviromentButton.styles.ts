import { fonts } from "./../../utils/theme/fonts";
import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

interface EnviromentButtonWrapperProps {
    isActive: boolean;
}

// prettier-ignore
export const EnviromentButtonWrapper = styled(RectButton)<EnviromentButtonWrapperProps>`
    background-color: ${(props) => props.theme.shape};
    height: 40px;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin: 0 10px 0 0;

    ${(props) =>
        props.isActive &&
        css`
            background-color: ${(props) => props.theme.green_light};
        `}
`;

interface EnviromentButtonTextProps {
    isActive: boolean;
}

export const EnviromentButtonText = styled.Text<EnviromentButtonTextProps>`
    color: ${(props) => props.theme.heading};
    font-family: ${fonts.textFont};

    ${(props) =>
        props.isActive &&
        css`
            font-family: ${fonts.headingFont};
            color: ${(props) => props.theme.green};
        `}
`;
