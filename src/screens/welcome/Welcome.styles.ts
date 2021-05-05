import { fonts } from "./../../utils/theme/fonts";
import { StatusBar, Dimensions } from "react-native";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

export const WelcomeWrapper = styled.SafeAreaView`
    flex: 1;
    margin-top: ${StatusBar.currentHeight || 0}px;
`;

export const WelcomePadding = styled.View`
    padding: 0 10px;
    flex: 1;
    justify-content: space-around;
    align-items: center;
`;

export const WelcomeTitle = styled.Text`
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    color: ${(props) => props.theme.heading};
    margin-top: 38px;
    font-family: ${fonts.headingFont};
    line-height: 34px;
`;

export const WelcomeImage = styled.Image`
    height: ${Dimensions.get("window").width * 0.7}px;
`;

export const WelcomeDescription = styled.Text`
    text-align: center;
    font-family: ${fonts.textFont};
    font-size: 18px;
    padding: 0 20px;
    color: ${(props) => props.theme.heading};
    width: 96%;
`;

export const WelcomeNextButton = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.green};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-bottom: 10px;
    height: 56px;
    padding: 0 20px;
`;

export const WelcomeButtonText = styled.Text`
    font-size: 24px;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    margin-right: 10px;
`;

export const WelcomeDontShowWrapper = styled.TouchableOpacity`
    margin-top: 6px;
`;

export const WelcomeDontShowText = styled.Text`
    font-size: 12px;
`;

export const WelcomeButtonIcon = styled(Entypo)`
    margin-top: 4px;
`;
