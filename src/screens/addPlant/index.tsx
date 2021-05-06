import React, { useState } from "react";
// prettier-ignore
import { AddPlantAbout, AddPlantAlertLabel, AddPlantController, AddPlantDateTimePickerWrapper ,AddPlantDateTimePicker, AddPlantInfoWrapper, AddPlantName, AddPlantTipContainer, AddPlantTipImage, AddPlantTipText, AddPlantWrapper, AddPlantScroll} from "./AddPlant.styles";
import { SvgFromUri } from "react-native-svg";
import waterDrop from "../../../assets/images/waterdrop.png";
import Button from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Params } from "../../utils/types";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { Alert, Platform } from "react-native";
import { format, isBefore } from "date-fns";
import { savePlant } from "../../libs/storage";

const AddPlant: React.FC = ({}) => {
    const navigation = useNavigation();
    const route = useRoute();

    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setshowDatePicker] = useState(Platform.OS === "ios");

    const { plant } = route.params as Params;

    const handleChangeTime = (_: Event, dateTime: Date | undefined) => {
        if (Platform.OS === "android") {
            setshowDatePicker((oldState) => !oldState);
        }

        if (dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date());
            return Alert.alert("Please choose a future date! 😶");
        }

        if (dateTime) {
            setSelectedDateTime(dateTime);
        }
    };

    const handleSave = async () => {
        try {
            await savePlant({
                ...plant,
                dateTimeNotification: selectedDateTime,
            });

            navigation.navigate("Confirmation", {
                title: "All set",
                subtitle:
                    "Don't worry, we will always remind you to take care of your plant with a whole lotta love.",
                buttonTitle: "Thanks a bunch :D",
                icon: "hug",
                nextScreen: "myPlants",
            });
        } catch (e) {
            Alert.alert("Something went wrong! 🤨");
        }
    };

    return (
        <AddPlantScroll
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}
        >
            <AddPlantWrapper>
                <AddPlantInfoWrapper>
                    <SvgFromUri uri={plant.photo} height={150} width={150} />
                    <AddPlantName>{plant.name}</AddPlantName>
                    <AddPlantAbout>{plant.about}</AddPlantAbout>
                </AddPlantInfoWrapper>

                <AddPlantController>
                    <AddPlantTipContainer>
                        <AddPlantTipImage source={waterDrop} />
                        <AddPlantTipText>{plant.water_tips}</AddPlantTipText>
                    </AddPlantTipContainer>

                    <AddPlantAlertLabel>
                        Choose the best time to be remembered
                    </AddPlantAlertLabel>

                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDateTime}
                            mode="time"
                            display="spinner"
                            onChange={handleChangeTime}
                        />
                    )}

                    {Platform.OS === "android" && (
                        <AddPlantDateTimePickerWrapper
                            onPress={() =>
                                setshowDatePicker((oldState) => !oldState)
                            }
                        >
                            <AddPlantDateTimePicker>
                                {`Change ${format(selectedDateTime, "HH:mm")}`}
                            </AddPlantDateTimePicker>
                        </AddPlantDateTimePickerWrapper>
                    )}

                    <Button title="Save" onPress={handleSave} />
                </AddPlantController>
            </AddPlantWrapper>
        </AddPlantScroll>
    );
};
export default AddPlant;
