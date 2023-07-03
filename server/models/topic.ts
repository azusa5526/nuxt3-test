import mongoose from 'mongoose';
import { ITopic } from '../../types/index';

const schema = new mongoose.Schema<ITopic>({
	image_url: { type: String, required: true },
	category: { type: String, required: true },
	title: { type: String, required: true },
	contents: { type: String, required: true },
	route: { type: String, required: true },
});

export const Topic = mongoose.model<ITopic>('topics', schema);
