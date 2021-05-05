import { fonts } from "./../../utils/theme/fonts";
import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const ConfirmationWrapper = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    margin-top: ${StatusBar.currentHeight || 0}px;
`;

export const ConfirmationContent = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ConfirmationEmoji = styled.Text`
    font-size: 78px;
`;

export const ConfirmationTitle = styled.Text`
    font-size: 22px;
    font-family: ${fonts.headingFont};
    text-align: center;
    color: ${(props) => props.theme.heading};
    line-height: 38px;
    margin-top: 15px;
`;

export const ConfirmationSubtitle = styled.Text`
    font-size: 17px;
    font-family: ${fonts.textFont};
    text-align: center;
    color: ${(props) => props.theme.heading};
    padding: 10px 20px;
`;

export const ConfirmationFooter = styled.View`
    width: 100%;
    padding: 0 30px;
    margin-top: 20px;
`;
