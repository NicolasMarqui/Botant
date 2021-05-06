import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import { PlantsProps } from "../utils/types";

interface StoragePlantProps {
    [id: string]: {
        data: PlantsProps;
    };
}

export const savePlant = async (plant: PlantsProps): Promise<void> => {
    try {
        const data = await AsyncStorage.getItem("@botant:plants");
        const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

        const newPlant = {
            [plant.id]: {
                data: plant,
            },
        };

        await AsyncStorage.setItem(
            "@botant:plants",
            JSON.stringify({
                ...newPlant,
                ...oldPlants,
            })
        );
    } catch (e) {
        throw new Error(e);
    }
};

export const loadPlant = async (): Promise<PlantsProps[]> => {
    try {
        const data = await AsyncStorage.getItem("@botant:plants");
        const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

        const plantsSorted = Object.keys(plants)
            .map((plant) => {
                return {
                    ...plants[plant].data,
                    hour: format(
                        new Date(plants[plant].data.dateTimeNotification),
                        "HH:mm"
                    ),
                };
            })
            .sort(
                (a, b) =>
                    Math.floor(
                        new Date(a.dateTimeNotification).getTime() / 1000
                    ) -
                    Math.floor(
                        new Date(b.dateTimeNotification).getTime() / 1000
                    )
            );

        return plantsSorted;
    } catch (e) {
        throw new Error(e);
    }
};
