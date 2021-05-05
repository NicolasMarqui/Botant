import { fonts } from "./../../utils/theme/fonts";
import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const HeaderWrapper = styled.View`
    margin-top: ${Platform.OS === "ios"
        ? `${getStatusBarHeight}px`
        : `${StatusBar.currentHeight}px`};
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const HeaderTitleWrapper = styled.View``;

export const HeaderGreetings = styled.Text`
    font-size: 32px;
    color: ${(props) => props.theme.heading};
    font-family: ${fonts.textFont};
`;

export const HeaderTitle = styled.Text`
    font-size: 32px;
    color: ${(props) => props.theme.heading};
    font-family: ${fonts.headingFont};
    line-height: 32px;
`;

export const HeaderAvatar = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 40px;
`;
