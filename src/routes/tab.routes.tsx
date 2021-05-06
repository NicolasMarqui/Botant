import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlantSelection from "../screens/PlantSelection";
import { MaterialIcons } from "@expo/vector-icons";
import MyPlants from "../screens/MyPlants";
import { Platform } from "react-native";

const Apptab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <Apptab.Navigator
            tabBarOptions={{
                activeTintColor: "#32B768",
                inactiveTintColor: "#52665A",
                labelPosition: "beside-icon",
                style: {
                    paddingVertical: Platform.OS === "ios" ? 20 : 0,
                    height: 68,
                },
            }}
        >
            <Apptab.Screen
                name="New Plant"
                component={PlantSelection}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name="add-circle-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Apptab.Screen
                name="My Plants"
                component={MyPlants}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Apptab.Navigator>
    );
};

export default AuthRoutes;
