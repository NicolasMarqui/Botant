import React, { useState } from "react";
import Button from "../../components/Button";
// prettier-ignore
import { IdentificationContent, IdentificationEmoji, IdentificationForm ,IdentificationInput, IdentificationWrapper, IdentificationCall, IdentificationFooter, IdentificationKeyboard, IdentificationHeader} from './Identification.styles';
import { Platform } from "react-native";

const Identification: React.FC = ({}) => {
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

    return (
        <IdentificationWrapper>
            <IdentificationKeyboard
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
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
                        />
                        <IdentificationFooter>
                            <Button title="Confirm" />
                        </IdentificationFooter>
                    </IdentificationForm>
                </IdentificationContent>
            </IdentificationKeyboard>
        </IdentificationWrapper>
    );
};
export default Identification;
