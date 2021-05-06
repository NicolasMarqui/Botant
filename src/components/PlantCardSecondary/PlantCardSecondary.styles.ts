import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { fonts } from "../../utils/theme/fonts";

export const PlantCardSecondaryWrapper = styled(RectButton)`
    width: 100%;
    padding: 25px 10px;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    margin: 5px 0;
    background-color: ${(props) => props.theme.shape};
`;

export const PlantCardSecondaryText = styled.Text`
    flex: 1;
    margin-left: 10px;
    font-family: ${fonts.headingFont};
    font-size: 17px;
    color: ${(props) => props.theme.heading};
`;

export const PlantCardSecondaryDetails = styled.View`
    align-items: flex-end;
    padding-right: 10px;
`;

export const PlantCardSecondaryTimeLabel = styled.Text`
    font-size: 16px;
    font-family: ${fonts.textFont};
    color: ${(props) => props.theme.body_light};
`;

export const PlantCardSecondaryTime = styled.Text`
    margin-top: 5px;
    font-size: 16px;
    font-family: ${fonts.headingFont};
    color: ${(props) => props.theme.body_dark};
`;
