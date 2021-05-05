import React from "react";
// prettier-ignore
import { WelcomeButtonText, WelcomeDescription, WelcomeImage, WelcomeNextButton, WelcomeTitle, WelcomeWrapper,} from "./Welcome.styles";
import wateringImage from "../../../assets/images/watering.png";

const Welcome: React.FC = ({}) => {
    return (
        <WelcomeWrapper>
            <WelcomeTitle>
                Manage {"\n"}
                your plants {"\n"}
                in a easy way
            </WelcomeTitle>
            <WelcomeImage source={wateringImage} />
            <WelcomeDescription>
                Don't forget to water your plants anymore. We will remember you
                whenever you need.
            </WelcomeDescription>
            <WelcomeNextButton activeOpacity={0.6}>
                <WelcomeButtonText>{`>`}</WelcomeButtonText>
            </WelcomeNextButton>
        </WelcomeWrapper>
    );
};
export default Welcome;
