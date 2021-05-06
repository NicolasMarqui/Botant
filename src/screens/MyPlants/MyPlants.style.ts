import styled from "styled-components/native";
import { fonts } from "../../utils/theme/fonts";

export const MyPlatsWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 50px 30px 0;
    background-color: ${(props) => props.theme.background};
`;

export const MyPlantsSpot = styled.View`
    background-color: ${(props) => props.theme.blue_light};
    padding: 0 20px;
    border-radius: 20px;
    height: 110px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MyPlantsSpotImage = styled.Image`
    width: 60px;
    height: 60px;
`;

export const MyPlantsSpotText = styled.Text`
    flex: 1;
    color: ${(props) => props.theme.blue};
    padding: 0 20px;
`;

export const MyPlantsAllPlants = styled.View`
    flex: 1;
    width: 100%;
`;

export const MyPlantsAlltitle = styled.Text`
    font-size: 24px;
    font-family: ${fonts.headingFont};
    color: ${(props) => props.theme.heading};
    margin: 20px 0;
`;

export const MyPlantsAllList = styled.FlatList``;
