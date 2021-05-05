import React from "react";
import Button from "../../components/Button";
// prettier-ignore
import { ConfirmationContent, ConfirmationEmoji, ConfirmationFooter, ConfirmationSubtitle, ConfirmationTitle, ConfirmationWrapper } from './Confirmation.styles';

interface ConfirmationProps {}

const Confirmation: React.FC<ConfirmationProps> = ({}) => {
    return (
        <ConfirmationWrapper>
            <ConfirmationContent>
                <ConfirmationEmoji>😄</ConfirmationEmoji>
                <ConfirmationTitle>All set</ConfirmationTitle>
                <ConfirmationSubtitle>
                    Now let's start taking care of your plants very carefully.
                </ConfirmationSubtitle>
                <ConfirmationFooter>
                    <Button title="Start" />
                </ConfirmationFooter>
            </ConfirmationContent>
        </ConfirmationWrapper>
    );
};
export default Confirmation;
