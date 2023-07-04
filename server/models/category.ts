import mongoose from 'mongoose';
import { ICategory } from '../../types';

interface SubCategory {
	name: string;
	route: string;
	order: number;
}

const embeddedSubCategory = new mongoose.Schema<SubCategory>({
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
