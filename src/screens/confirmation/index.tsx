import { useNavigation } from "@react-navigation/core";
import React from "react";
import Button from "../../components/Button";
// prettier-ignore
import { ConfirmationContent, ConfirmationEmoji, ConfirmationFooter, ConfirmationSubtitle, ConfirmationTitle, ConfirmationWrapper } from './Confirmation.styles';

const Confirmation = () => {
    const navigation = useNavigation();
    const handleStart = () => navigation.navigate("plantSelection");

    return (
        <ConfirmationWrapper>
            <ConfirmationContent>
                <ConfirmationEmoji>😄</ConfirmationEmoji>
                <ConfirmationTitle>All set</ConfirmationTitle>
                <ConfirmationSubtitle>
                    Now let's start taking care of your plants very carefully.
                </ConfirmationSubtitle>
                <ConfirmationFooter>
                    <Button title="Start" onPress={handleStart} />
                </ConfirmationFooter>
            </ConfirmationContent>
        </ConfirmationWrapper>
    );
};
export default Confirmation;
