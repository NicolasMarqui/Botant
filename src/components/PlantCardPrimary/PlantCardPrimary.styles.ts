import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { fonts } from "../../utils/theme/fonts";

export const PlantCardPrimaryWrapper = styled(RectButton)`
    flex: 1;
    max-width: 45%;
    background-color: ${(props) => props.theme.shape};
    border-radius: 20px;
    padding: 10px 0;
    align-items: center;
    margin: 10px;
`;

export const PlantCardPrimaryText = styled.Text`
    color: ${(props) => props.theme.green_dark};
    font-family: ${fonts.headingFont};
    margin: 16px 0;
`;
