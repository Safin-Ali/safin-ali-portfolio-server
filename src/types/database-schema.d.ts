// Define the structure of a project
export type ProjectSchemaType = {
    projectName: string;
    projectThumb: string;
    projectLiveURL: string;
    projectCodeURL: string;
    projectOthersInfo: {
        challenges: string[];
        features: string[];
    };
    projectCategory: string[];
    projectUsedLib: string[];
    projectTech: string[];
    shortText: string;
};