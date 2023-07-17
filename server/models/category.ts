import mongoose from 'mongoose';
import { ICategory } from '../../types';
import { ISubCategory } from '../../types';

const embeddedSubCategory = new mongoose.Schema<ISubCategory>({
	name: { type: String, required: true },
	route: { type: String, required: true },
	order: { type: Number, required: true },
}).set('toJSON', {
	versionKey: false,
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
	},
});

const schema = new mongoose.Schema<ICategory>({
	image_url: { type: String, required: true },
	name: { type: String, required: true },
	route: { type: String, required: true },
	order: { type: Number, required: true },
	sub_categories: [embeddedSubCategory],
}).set('toJSON', {
	versionKey: false,
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
	},
});

export const Category = mongoose.model<ICategory>('category', schema);
