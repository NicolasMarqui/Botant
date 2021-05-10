import React, { useEffect, useState } from "react";
// prettier-ignore
import { HeaderAvatar, HeaderGreetings, HeaderTitleWrapper, HeaderWrapper, HeaderTitle} from "./Header.styles";
import avatar from "../../../assets/images/nick.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface HeaderProps {
    fromMyPlants?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fromMyPlants = false }) => {
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem("@botant:user");
            setUserName(user || "");
        }

        loadStorageUserName();
    }, []);

    return (
        <HeaderWrapper>
            <HeaderTitleWrapper>
                <HeaderGreetings>
                    {fromMyPlants ? "My" : "Hello"}
                </HeaderGreetings>
                <HeaderTitle>{fromMyPlants ? "Plants" : userName}</HeaderTitle>
            </HeaderTitleWrapper>

            <HeaderAvatar source={avatar} />
        </HeaderWrapper>
    );
};
export default Header;
