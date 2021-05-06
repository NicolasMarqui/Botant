export interface EnviromentProps {
    key: string;
    title: string;
}

export interface PlantsProps {
    id: number;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number;
        repeat_every: string;
    };
    hour: string;
    dateTimeNotification: Date;
}

export interface Params {
    plant: PlantsProps;
}
