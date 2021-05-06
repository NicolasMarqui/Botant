import React, { useEffect, useState } from "react";
import EnviromentButton from "../../components/EnviromentButton";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import PlantCardPrimary from "../../components/PlantCardPrimary";
import api from "../../services/api";
import { EnviromentProps, PlantsProps } from "../../utils/types";
import { ActivityIndicator } from "react-native";
// prettier-ignore
import { SelectionHeader, SelectionList, SelectionListPlants, SelectionListPlantsWrapper, SelectionListWrapper, SelectionSubTitle, SelectionTitle, SelectionWrapper } from "./PlantSelection.styles";
import { useNavigation } from "@react-navigation/core";

const PlantSelection: React.FC = ({}) => {
    const navigation = useNavigation();

    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantsProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState("all");
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    async function fetchEnviroment() {
        const { data } = await api.get(
            `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
        );

        if (!data) {
            return setIsLoading(true);
        }

        if (page > 1) {
            setPlants((oldValue) => [...oldValue, ...data]);
            setFilteredPlants((oldValue) => [...oldValue, ...data]);
        } else {
            setPlants(data);
            setFilteredPlants(data);
        }

        setIsLoading(false);
        setLoadingMore(false);
    }

    const handleEnvironmentSelected = (environment: string) => {
        setEnvironmentSelected(environment);

        if (environment === "all") {
            return setFilteredPlants(plants);
        }

        const filtered = plants?.filter((plant) =>
            plant.environments.includes(environment)
        );
        setFilteredPlants(filtered);
    };

    const handleFetchMore = (distance: number) => {
        if (distance < 1) return;

        setLoadingMore(true);
        setPage((oldValue) => oldValue + 1);
        fetchEnviroment();
    };

    const handlePlantSelect = (plant: PlantsProps): void => {
        navigation.navigate("addPlant", { plant });
    };

    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get(
                "plants_environments?_sort=title&_order=asc"
            );
            setEnviroments([
                {
                    key: "all",
                    title: "All",
                },
                ...data,
            ]);
        }

        fetchEnviroment();
    }, []);

    useEffect(() => {
        fetchEnviroment();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <SelectionWrapper>
            <SelectionHeader>
                <Header />
                <SelectionTitle>In what type of environment</SelectionTitle>
                <SelectionSubTitle>
                    do you want to place your plant?
                </SelectionSubTitle>
            </SelectionHeader>

            <SelectionListWrapper>
                <SelectionList
                    data={enviroments}
                    // @ts-ignore
                    keyExtractor={(item): any => item.key}
                    renderItem={({ item }: any) => (
                        <EnviromentButton
                            title={item.title}
                            active={item.key === environmentSelected}
                            onPress={() => handleEnvironmentSelected(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ justifyContent: "center" }}
                />
            </SelectionListWrapper>

            <SelectionListPlantsWrapper>
                <SelectionListPlants
                    data={filteredPlants}
                    // @ts-ignore
                    keyExtractor={(item): any => String(item.id)}
                    renderItem={({ item }: any) => (
                        <PlantCardPrimary
                            data={item}
                            onPress={() => handlePlantSelect(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) =>
                        handleFetchMore(distanceFromEnd)
                    }
                    ListFooterComponent={
                        loadingMore ? (
                            <ActivityIndicator color="#32B768" />
                        ) : (
                            <></>
                        )
                    }
                />
            </SelectionListPlantsWrapper>
        </SelectionWrapper>
    );
};
export default PlantSelection;
