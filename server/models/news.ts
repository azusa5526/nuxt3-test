import mongoose from 'mongoose';
import { INews } from '../../types/index';

const schema = new mongoose.Schema<INews>({
	route: { type: String, required: true },
	image_url: { type: String, required: true },
	news_route: { type: String, required: true },
	category_id: { type: mongoose.Schema.Types.ObjectId, required: true },
	content: { type: String, required: true },
	create_time: { type: Date, reaquire: true },
}).set('toJSON', {
	versionKey: false,
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
	},
});

export const News = mongoose.model<INews>('news', schema);
