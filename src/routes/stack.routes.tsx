import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import Identification from "../screens/Identification";
import Confirmation from "../screens/Confirmation";
import AddPlant from "../screens/AddPlant";
import MyPlants from "../screens/MyPlants";
import AuthRoutes from "./tab.routes";

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
        <StackRoutes.Screen name="plantSelection" component={AuthRoutes} />
        <StackRoutes.Screen name="addPlant" component={AddPlant} />
        <StackRoutes.Screen name="myPlants" component={AuthRoutes} />
    </StackRoutes.Navigator>
);

export default AppRouter;
