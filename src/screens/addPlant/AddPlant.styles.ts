import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { fonts } from "../../utils/theme/fonts";

export const AddPlantWrapper = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const AddPlantInfoWrapper = styled.View`
    flex: 1;
    padding: 50px 30px;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.shape};
`;

export const AddPlantName = styled.Text`
    font-family: ${fonts.headingFont};
    font-size: 24px;
    color: ${(props) => props.theme.heading};
    margin-top: 15px;
`;

export const AddPlantAbout = styled.Text`
    text-align: center;
    font-family: ${fonts.textFont};
    color: ${(props) => props.theme.heading};
    font-size: 17px;
    margin-top: 10px;
`;

export const AddPlantController = styled.View`
    background-color: ${(props) => props.theme.white};
    padding: 20px 30px ${getBottomSpace() || 20}px;
`;

export const AddPlantTipContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.blue_light};
    padding: 20px;
    border-radius: 20px;
    position: relative;
    bottom: 60px;
`;

export const AddPlantTipImage = styled.Image`
    width: 56px;
    height: 56px;
`;

export const AddPlantTipText = styled.Text`
    flex: 1;
    margin-left: 20px;
    font-family: ${fonts.textFont};
    color: ${(props) => props.theme.blue};
    text-align: justify;
`;

export const AddPlantAlertLabel = styled.Text`
    text-align: center;
    font-family: ${fonts.complementFont};
    color: ${(props) => props.theme.heading};
    font-size: 12px;
    margin-bottom: 5px;
`;

export const AddPlantDateTimePickerWrapper = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    padding: 40px 0;
`;

export const AddPlantDateTimePicker = styled.Text`
    color: ${(props) => props.theme.heading};
    font-size: 24px;
    font-family: ${fonts.textFont};
`;
