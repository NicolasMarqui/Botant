import React from "react";
// prettier-ignore
import { AddPlantAbout, AddPlantAlertLabel, AddPlantController, AddPlantInfoWrapper, AddPlantName, AddPlantTipContainer, AddPlantTipImage, AddPlantTipText, AddPlantWrapper} from "./AddPlant.styles";
import { SvgFromUri } from "react-native-svg";
import waterDrop from "../../../assets/images/waterdrop.png";
import Button from "../../components/Button";
import { useRoute } from "@react-navigation/core";
import { Params } from "../../utils/types";

const AddPlant: React.FC = ({}) => {
    const route = useRoute();
    const {
        plant: { photo, about, name, water_tips },
    } = route.params as Params;

    return (
        <AddPlantWrapper>
            <AddPlantInfoWrapper>
                <SvgFromUri uri={photo} height={150} width={150} />
                <AddPlantName>{name}</AddPlantName>
                <AddPlantAbout>{about}</AddPlantAbout>
            </AddPlantInfoWrapper>

            <AddPlantController>
                <AddPlantTipContainer>
                    <AddPlantTipImage source={waterDrop} />
                    <AddPlantTipText>{water_tips}</AddPlantTipText>
                </AddPlantTipContainer>

                <AddPlantAlertLabel>
                    Choose the best time to be remembered
                </AddPlantAlertLabel>

                <Button title="Save" onPress={() => {}} />
            </AddPlantController>
        </AddPlantWrapper>
    );
};
export default AddPlant;
