import React from "react";
// prettier-ignore
import { PlantCardSecondaryDetails, PlantCardSecondaryText, PlantCardSecondaryTime, PlantCardSecondaryTimeLabel, PlantCardSecondaryWrapper} from "./PlantCardSecondary.styles";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

interface PlantCardSecondaryProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    };
}

const PlantCardSecondary: React.FC<PlantCardSecondaryProps> = ({
    data,
    ...rest
}) => {
    const { name, photo, hour } = data;

    return (
        <PlantCardSecondaryWrapper {...rest}>
            <SvgFromUri uri={photo} width={50} height={50} />
            <PlantCardSecondaryText>{name}</PlantCardSecondaryText>

            <PlantCardSecondaryDetails>
                <PlantCardSecondaryTimeLabel>
                    Water by
                </PlantCardSecondaryTimeLabel>
                <PlantCardSecondaryTime>{hour}</PlantCardSecondaryTime>
            </PlantCardSecondaryDetails>
        </PlantCardSecondaryWrapper>
    );
};
export default PlantCardSecondary;
