import { SkillSchemaType } from '@custom-types/database-schema.d';
import mongoose, { Document, Schema } from 'mongoose';

const skillsSchema = new Schema<SkillSchemaType & Document>({
	icon: String,
	name: String,
	level: {
		type:String,
		enum:['Intermediate', 'Familiar', 'Expert', 'Master', 'Future']
	}
});

export const SkillsModel = mongoose.model(`skill`, skillsSchema);