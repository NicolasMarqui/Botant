import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonText, ButtonWrapper } from "./Button.styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
    return (
        <ButtonWrapper>
            <ButtonText>{title}</ButtonText>
        </ButtonWrapper>
    );
};
export default Button;
