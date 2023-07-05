import mongoose from 'mongoose';
import { ICategory } from '../../types';
import { ISubCategories } from '../../types';

const embeddedSubCategory = new mongoose.Schema<ISubCategories>({
	name: { type: String, required: true },
	route: { type: String, required: true },
	order: { type: Number, required: true },
});

const schema = new mongoose.Schema<ICategory>({
	image_url: { type: String, required: true },
	name: { type: String, required: true },
	route: { type: String, required: true },
	order: { type: Number, required: true },
	sub_categories: [embeddedSubCategory],
});

export const Category = mongoose.model<ICategory>('category', schema);
