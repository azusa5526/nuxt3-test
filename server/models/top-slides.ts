import mongoose from 'mongoose';
import { ITopSlide } from '../../types/index';

const schema = new mongoose.Schema<ITopSlide>({
	image_url: { type: String, required: true },
	route: { type: String },
	title: { type: String },
	description: { type: String },
}).set('toJSON', {
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
	},
});

export const TopSlide = mongoose.model<ITopSlide>('top-slide', schema);
