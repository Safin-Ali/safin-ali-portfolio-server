import { ProjectSchemaType } from '@custom-types/database-schema.d';
import mongoose, { Document, Schema } from 'mongoose';

const projectsSchema = new Schema<ProjectSchemaType & Document>({
	projectName: String,
	projectThumb: String,
	projectLiveURL: String,
	projectCodeURL: String,
	projectOthersInfo: {
		challenges: [String],
		features: [String],
	},
	projectCategory: [String],
	projectUsedLib: [String],
	projectTech: [String],
	shortText: String,
});

export const ProjectsModel = mongoose.model(`project`,projectsSchema);