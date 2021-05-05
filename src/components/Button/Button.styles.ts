import { fonts } from "./../../utils/theme/fonts";
import styled from "styled-components/native";

export const ButtonWrapper = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.green};
    border-radius: 16px;
    height: 56px;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.white};
    font-family: ${fonts.headingFont};
`;
