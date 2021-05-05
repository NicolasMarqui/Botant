import { fonts } from "./../../utils/theme/fonts";
import styled, { css } from "styled-components/native";
import { KeyboardAvoidingView } from "react-native";

export const IdentificationWrapper = styled.SafeAreaView`
    flex: 1;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
`;

export const IdentificationKeyboard = styled(KeyboardAvoidingView)`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const IdentificationContent = styled.View`
    flex: 1;
    width: 100%;
`;

export const IdentificationForm = styled.View`
    flex: 1;
    padding: 0 25px;
    justify-content: center;
    align-items: center;
`;

export const IdentificationEmoji = styled.Text`
    font-size: 44px;
`;

export const IdentificationCall = styled.Text`
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: ${(props) => props.theme.heading};
    font-family: ${fonts.headingFont};
    margin-top: 20px;
`;

interface IdentificationInputProps {
    isFocused: boolean;
}

export const IdentificationInput = styled.TextInput<IdentificationInputProps>`
    border-bottom-width: 1px;
    border-bottom-color: ${(props) => props.theme.gray};
    width: 100%;
    font-size: 18px;
    margin-top: 50px;
    padding: 10px;
    text-align: center;
    ${(props) =>
        props.isFocused &&
        css`
            border-bottom-color: ${(props) => props.theme.green};
        `}
`;

export const IdentificationFooter = styled.View`
    width: 100%;
    margin-top: 40px;
    padding: 0 20px;
`;

export const IdentificationHeader = styled.View`
    align-items: center;
`;
