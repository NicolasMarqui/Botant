import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
// prettier-ignore
import { EnviromentButtonWrapper, EnviromentButtonText } from './EnviromentButton.styles';

interface EnviromentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

const EnviromentButton: React.FC<EnviromentButtonProps> = ({
    title,
    active = false,
    ...rest
}) => {
    return (
        <EnviromentButtonWrapper {...rest} isActive={active}>
            <EnviromentButtonText isActive={active}>
                {title}
            </EnviromentButtonText>
        </EnviromentButtonWrapper>
    );
};
export default EnviromentButton;
