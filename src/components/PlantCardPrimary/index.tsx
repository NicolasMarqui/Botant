import React from "react";
// prettier-ignore
import { PlantCardPrimaryText, PlantCardPrimaryWrapper} from "./PlantCardPrimary.styles";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

interface PlantCardPrimaryProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
    };
}

const PlantCardPrimary: React.FC<PlantCardPrimaryProps> = ({
    data,
    ...rest
}) => {
    const { name, photo } = data;

    return (
        <PlantCardPrimaryWrapper {...rest}>
            <SvgFromUri uri={photo} width={70} height={70} />
            <PlantCardPrimaryText>{name}</PlantCardPrimaryText>
        </PlantCardPrimaryWrapper>
    );
};
export default PlantCardPrimary;
