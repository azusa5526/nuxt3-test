import mongoose from 'mongoose';
import { ITopic } from '../../types/index';

const schema = new mongoose.Schema<ITopic>({
	route: { type: String, required: true },
	image_url: { type: String, required: true },
	category: { type: String, required: true },
	title: { type: String, required: true },
	content: { type: String, required: true },
	create_time: { type: Date, reaquire: true },
}).set('toJSON', {
	versionKey: false,
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
	},
});

export const Topic = mongoose.model<ITopic>('topic', schema);
