import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const WelcomeWrapper = styled.SafeAreaView`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    margin-top: ${StatusBar.currentHeight || 0}px;
`;

export const WelcomeTitle = styled.Text`
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    color: ${(props) => props.theme.heading};
    margin-top: 38px;
`;

export const WelcomeImage = styled.Image`
    height: 284px;
    width: 292px;
`;

export const WelcomeDescription = styled.Text`
    text-align: center;
    font-size: 18px;
    padding: 0 20px;
    color: ${(props) => props.theme.heading};
`;

export const WelcomeNextButton = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    width: 56px;
    height: 56px;
`;

export const WelcomeButtonText = styled.Text`
    font-size: 24px;
    color: ${(props) => props.theme.white};
`;
