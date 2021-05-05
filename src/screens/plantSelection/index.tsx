import React, { useEffect, useState } from "react";
import EnviromentButton from "../../components/EnviromentButton";
import Header from "../../components/Header";
import api from "../../services/api";
import { EnviromentProps } from "../../utils/types";
// prettier-ignore
import { SelectionHeader, SelectionList, SelectionListWrapper, SelectionSubTitle, SelectionTitle, SelectionWrapper} from "./PlantSelection.styles";

const PlantSelection: React.FC = ({}) => {
    const [enviroments, setEnviroments] = useState<EnviromentProps[]>();

    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get("plants_environments");
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
                        <EnviromentButton title={item.title} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ justifyContent: "center" }}
                />
            </SelectionListWrapper>
        </SelectionWrapper>
    );
};
export default PlantSelection;
