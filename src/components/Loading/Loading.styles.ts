import styled from "styled-components/native";
import LottieView from "lottie-react-native";

export const LoadingWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoadingAnimation = styled(LottieView)`
    background-color: transparent;
    width: 200px;
    height: 200px;
`;
