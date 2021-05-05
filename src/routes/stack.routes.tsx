import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/welcome";
import Identification from "../screens/identification";
import Confirmation from "../screens/confirmation";

const StackRoutes = createStackNavigator();

const AppRouter: React.FC = () => (
    <StackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: "#fff",
            },
        }}
    >
        <StackRoutes.Screen name="Welcome" component={Welcome} />
        <StackRoutes.Screen
            name="UserIdentification"
            component={Identification}
        />
        <StackRoutes.Screen name="Confirmation" component={Confirmation} />
    </StackRoutes.Navigator>
);

export default AppRouter;
