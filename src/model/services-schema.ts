import { ServicesSchemaType } from '@custom-types/database-schema.d';
import mongoose, { Document, Schema } from 'mongoose';

const servicesSchema = new Schema<ServicesSchemaType & Document>({
	iconSRC: String,
	serviceName: String,
	servicesList: {
		type:[String],
		validate:{
			validator:(arr:string[])=> arr.length === 5,
			message: `servicesList must contain exactly 5 option`
		},
		required:true
	}
});

export const ServicesModel = mongoose.model(`service`, servicesSchema);