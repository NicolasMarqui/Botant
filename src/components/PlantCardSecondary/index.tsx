import React from "react";
// prettier-ignore
import { PlantCardSecondaryDetails, PlantCardSecondaryRemove, PlantCardSecondaryText, PlantCardSecondaryTime, PlantCardSecondaryTimeLabel, PlantCardSecondaryWrapper} from "./PlantCardSecondary.styles";
import { RectButtonProps } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SvgFromUri } from "react-native-svg";
import { Animated } from "react-native";
import { Feather } from "@expo/vector-icons";

interface PlantCardSecondaryProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    };
    handleRemove: () => void;
}

const PlantCardSecondary: React.FC<PlantCardSecondaryProps> = ({
    data,
    handleRemove,
    ...rest
}) => {
    const { name, photo, hour } = data;

    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <PlantCardSecondaryRemove onPress={handleRemove}>
                        <Feather name="trash" size={32} color="#fff" />
                    </PlantCardSecondaryRemove>
                </Animated.View>
            )}
        >
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
        </Swipeable>
    );
};
export default PlantCardSecondary;
