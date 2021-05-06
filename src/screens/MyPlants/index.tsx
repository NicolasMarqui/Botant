import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
// prettier-ignore
import { MyPlantsAllList, MyPlantsAllPlants, MyPlantsAlltitle, MyPlantsSpot, MyPlantsSpotImage, MyPlantsSpotText, MyPlatsWrapper } from "./MyPlants.style";
import waterDrop from "../../../assets/images/waterdrop.png";
import { PlantsProps } from "../../utils/types";
import { loadPlant } from "../../libs/storage";
import { formatDistance } from "date-fns/esm";
import { enGB } from "date-fns/locale";
import Loading from "../../components/Loading";
import PlantCardSecondary from "../../components/PlantCardSecondary";

const MyPlants: React.FC = () => {
    const [myPlants, setMyplants] = useState<PlantsProps[]>([]);
    const [loading, setloading] = useState(true);
    const [nextWaterd, setnextWaterd] = useState<string>();

    useEffect(() => {
        async function loadStorageData() {
            const plantsStoraged = await loadPlant();
            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: enGB }
            );

            setnextWaterd(
                `Don't forget to water ${plantsStoraged[0].name} in ${nextTime}`
            );
            setMyplants(plantsStoraged);
            setloading(false);
        }

        loadStorageData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <MyPlatsWrapper>
            <Header />

            <MyPlantsSpot>
                <MyPlantsSpotImage source={waterDrop} />
                <MyPlantsSpotText>{nextWaterd}</MyPlantsSpotText>
            </MyPlantsSpot>

            <MyPlantsAllPlants>
                <MyPlantsAlltitle>Next watered</MyPlantsAlltitle>
                <MyPlantsAllList
                    data={myPlants}
                    // @ts-ignore
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }: any) => (
                        <PlantCardSecondary data={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flex: 1 }}
                />
            </MyPlantsAllPlants>
        </MyPlatsWrapper>
    );
};
export default MyPlants;
