import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import Welcome from "./src/screens/welcome";
import { themes } from "./src/utils/theme";
import { useColorScheme } from "react-native";

export default function App() {
    const deviceTheme = useColorScheme();
    const theme = !deviceTheme ? "dark" : themes[deviceTheme] || themes.dark;

    return (
        // @ts-ignore
        <ThemeProvider theme={theme}>
            <StatusBar style="light" />
            <Welcome />
        </ThemeProvider>
    );
}
