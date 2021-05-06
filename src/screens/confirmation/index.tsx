import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import Button from "../../components/Button";
// prettier-ignore
import { ConfirmationContent, ConfirmationEmoji, ConfirmationFooter, ConfirmationSubtitle, ConfirmationTitle, ConfirmationWrapper } from './Confirmation.styles';

interface Params {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: "smile" | "hug";
    nextScreen: string;
}

const emojis = {
    hug: "🤗",
    smile: "😃",
};

const Confirmation = () => {
    const navigation = useNavigation();
    const routes = useRoute();

    const {
        title,
        subtitle,
        icon,
        buttonTitle,
        nextScreen,
    } = routes.params as Params;

    const handleStart = () => navigation.navigate(nextScreen);

    return (
        <ConfirmationWrapper>
            <ConfirmationContent>
                <ConfirmationEmoji>{emojis[icon]}</ConfirmationEmoji>
                <ConfirmationTitle>{title}</ConfirmationTitle>
                <ConfirmationSubtitle>{subtitle}</ConfirmationSubtitle>
                <ConfirmationFooter>
                    <Button title={buttonTitle} onPress={handleStart} />
                </ConfirmationFooter>
            </ConfirmationContent>
        </ConfirmationWrapper>
    );
};
export default Confirmation;
