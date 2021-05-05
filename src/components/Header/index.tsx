import React from "react";
// prettier-ignore
import { HeaderAvatar, HeaderGreetings, HeaderTitleWrapper, HeaderWrapper, HeaderTitle} from "./Header.styles";
import avatar from "../../../assets/images/nick.png";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <HeaderWrapper>
            <HeaderTitleWrapper>
                <HeaderGreetings>Hello</HeaderGreetings>
                <HeaderTitle>Nicolas</HeaderTitle>
            </HeaderTitleWrapper>

            <HeaderAvatar source={avatar} />
        </HeaderWrapper>
    );
};
export default Header;
