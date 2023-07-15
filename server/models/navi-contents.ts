import mongoose from 'mongoose';
import { INaviContent } from '../../types/index';

const schema = new mongoose.Schema<INaviContent>({
	image_url: { type: String, required: true },
	route: { type: String, required: true },
	title_jp: { type: String, required: true },
	title_eng: { type: String, required: true },
	content: { type: String, required: true },
}).set('toJSON', {
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
	},
});

export const NaviContent = mongoose.model<INaviContent>('navi-content', schema);
