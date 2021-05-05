import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonText, ButtonWrapper } from "./Button.styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

const Button = ({ title, ...rest }: ButtonProps) => {
    return (
        // @ts-ignore
        <ButtonWrapper {...rest}>
            <ButtonText>{title}</ButtonText>
        </ButtonWrapper>
    );
};

export default Button;
