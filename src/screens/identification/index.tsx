import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Keyboard, Platform } from "react-native";
import Button from "../../components/Button";
// prettier-ignore
import { IdentificationCall, IdentificationCloseKeyboard, IdentificationContent, IdentificationEmoji, IdentificationFooter, IdentificationForm, IdentificationHeader, IdentificationInput, IdentificationKeyboard, IdentificationWrapper } from './Identification.styles';

const Identification: React.FC = ({}) => {
    const navigation = useNavigation();
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => setIsFocused(true);
    const handleInputBlur = () => {
        setIsFocused(false);
        setIsFilled(!!name);
    };
    const handleInputChange = (value: string) => {
        setIsFilled(!!value);
        setName(value);
    };

    const handleSubmit = () => {
        if (!name) return;
        navigation.navigate("Confirmation");
    };

    return (
        <IdentificationWrapper>
            <IdentificationKeyboard
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <IdentificationCloseKeyboard onPress={Keyboard.dismiss}>
                    <IdentificationContent>
                        <IdentificationForm>
                            <IdentificationHeader>
                                <IdentificationEmoji>
                                    {!isFilled ? "😀" : "😄"}
                                </IdentificationEmoji>
                                <IdentificationCall>
                                    How can {"\n"}
                                    we call you?
                                </IdentificationCall>
                            </IdentificationHeader>
                            <IdentificationInput
                                placeholder="Your name here"
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                isFocused={isFocused || isFilled}
                                onChangeText={handleInputChange}
                                onSubmitEditing={handleSubmit}
                            />
                            <IdentificationFooter>
                                <Button
                                    title="Confirm"
                                    onPress={handleSubmit}
                                />
                            </IdentificationFooter>
                        </IdentificationForm>
                    </IdentificationContent>
                </IdentificationCloseKeyboard>
            </IdentificationKeyboard>
        </IdentificationWrapper>
    );
};
export default Identification;
