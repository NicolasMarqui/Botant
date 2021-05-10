import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import Identification from "../screens/Identification";
import Confirmation from "../screens/Confirmation";
import AddPlant from "../screens/AddPlant";
import AuthRoutes from "./tab.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StackRoutes = createStackNavigator();

const AppRouter: React.FC = () => {
    const [showWelcome, setShowWelcome] = useState<string | null>();

    useEffect(() => {
        async function getWelcome() {
            const welcome = await AsyncStorage.getItem("@botant:hideWelcome");
            setShowWelcome(welcome);
        }

        getWelcome();
    }, []);

    return (
        <StackRoutes.Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: "#fff",
                },
            }}
            initialRouteName={
                showWelcome || showWelcome !== "1"
                    ? "plantSelection"
                    : "Welcome"
            }
        >
            <StackRoutes.Screen name="Welcome" component={Welcome} />
            <StackRoutes.Screen
                name="UserIdentification"
                component={Identification}
            />
            <StackRoutes.Screen name="Confirmation" component={Confirmation} />
            <StackRoutes.Screen name="plantSelection" component={AuthRoutes} />
            <StackRoutes.Screen name="addPlant" component={AddPlant} />
            <StackRoutes.Screen name="myPlants" component={AuthRoutes} />
        </StackRoutes.Navigator>
    );
};

export default AppRouter;
