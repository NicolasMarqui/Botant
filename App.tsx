import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { themes } from "./src/utils/theme";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import Routes from "./src/routes";

export default function App() {
    const deviceTheme = useColorScheme();
    const theme = !deviceTheme ? "dark" : themes[deviceTheme] || themes.dark;
    const [fontsLoaded] = useFonts({
        Jost_400Regular,
        Jost_600SemiBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        // @ts-ignore
        <ThemeProvider theme={theme}>
            <StatusBar style="light" />
            <Routes />
        </ThemeProvider>
    );
}
