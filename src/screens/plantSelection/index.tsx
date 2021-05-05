import React, { useEffect, useState } from "react";
import EnviromentButton from "../../components/EnviromentButton";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import PlantCardPrimary from "../../components/PlantCardPrimary";
import api from "../../services/api";
import { EnviromentProps, PlantsProps } from "../../utils/types";
import { ActivityIndicator, ActivityIndicatorBase } from "react-native";
// prettier-ignore
import { SelectionHeader, SelectionList, SelectionListPlants, SelectionListPlantsWrapper, SelectionListWrapper, SelectionSubTitle, SelectionTitle, SelectionWrapper } from "./PlantSelection.styles";

const PlantSelection: React.FC = ({}) => {
    const [enviroments, setEnviroments] = useState<EnviromentProps[]>();
    const [plants, setPlants] = useState<PlantsProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState("all");
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loadedAll, setLoadedAll] = useState(false);

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
                    renderItem={({ item }: any) => (
                        <PlantCardPrimary data={item} />
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
