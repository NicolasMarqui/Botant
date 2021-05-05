import styled from "styled-components/native";
import { fonts } from "../../utils/theme/fonts";

export const SelectionWrapper = styled.SafeAreaView`
    flex: 1;
    margin-top: 20px;
    background-color: ${(props) => props.theme.background};
`;

export const SelectionHeader = styled.View`
    padding: 0 30px;
`;

export const SelectionTitle = styled.Text`
    font-size: 17px;
    color: ${(props) => props.theme.heading};
    font-family: ${fonts.headingFont};
    line-height: 20px;
    margin-top: 15px;
`;

export const SelectionSubTitle = styled.Text`
    font-size: 17px;
    font-family: ${fonts.textFont};
    line-height: 20px;
    color: ${(props) => props.theme.heading};
`;

export const SelectionListWrapper = styled.View``;

export const SelectionList = styled.FlatList`
    padding-bottom: 5px;
    margin: 32px 0 32px 32px;
`;
