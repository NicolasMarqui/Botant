import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import { PlantsProps } from "../utils/types";
import * as Notifications from "expo-notifications";

export interface StoragePlantProps {
    [id: string]: {
        data: PlantsProps;
        notificationId: string;
    };
}

export const savePlant = async (plant: PlantsProps): Promise<void> => {
    try {
        const nextTime = new Date(plant.dateTimeNotification);
        const now = new Date();

        const { times, repeat_every } = plant.frequency;
        if (repeat_every === "week") {
            const interval = Math.trunc(7 / times);
            nextTime.setDate(now.getDate() + interval);
        }

        // else {
        //     nextTime.setDate(nextTime.getDate() + 1);
        // }

        const seconds = Math.abs(
            Math.ceil((now.getTime() - nextTime.getTime()) / 1000)
        );

        const notificationId = await Notifications.scheduleNotificationAsync({
            content: {
                title: "Heeeeey, 🌱",
                body: `I'ts time to take care of ${plant.name}`,
                sound: true,
                priority: Notifications.AndroidNotificationPriority.HIGH,
                data: {
                    plant,
                },
            },
            trigger: {
                seconds: seconds < 60 ? 60 : seconds,
                repeats: true,
            },
        });

        const data = await AsyncStorage.getItem("@botant:plants");
        const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

        const newPlant = {
            [plant.id]: {
                data: plant,
                notificationId,
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

export const deletePlant = async (id: string): Promise<void> => {
    const data = await AsyncStorage.getItem("@botant:plants");
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    await Notifications.cancelScheduledNotificationAsync(
        plants[id].notificationId
    );
    delete plants[id];

    await AsyncStorage.setItem("@botant:plants", JSON.stringify(plants));
};
