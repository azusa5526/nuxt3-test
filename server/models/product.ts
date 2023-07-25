import mongoose from 'mongoose';
import { IProduct, IProductBranch, IProductPart } from '../../types';

const embeddedProductBranch = new mongoose.Schema<IProductBranch>({
	color: { type: [String] },
	image_url: { type: String, required: true },
	model: { type: String, required: true },
	is_release: { type: Boolean, required: true },
	release_at: { type: String },
	stock_quantity: { type: Number },
	price: { type: String, required: true },
}).set('toJSON', {
	versionKey: false,
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
	},
});

const embeddedProductPart = new mongoose.Schema<IProductPart>({
	name: { type: String, required: true },
	price: { type: String, required: true },
	route: { type: String },
	note: { type: String },
}).set('toJSON', {
	versionKey: false,
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
	},
});

const productSchema = new mongoose.Schema<IProduct>({
	name: { type: String, required: true },
	model: { type: String, required: true },
	route: { type: String, required: true },
	description: { type: String },
	category_id: { type: mongoose.Schema.Types.ObjectId, required: true },
	sub_category_id: { type: mongoose.Schema.Types.ObjectId, required: true },
	function_ids: [{ type: mongoose.Schema.Types.ObjectId }],
	type_ids: [{ type: mongoose.Schema.Types.ObjectId }],
	series_ids: [{ type: mongoose.Schema.Types.ObjectId }],
	image_url: { type: String, required: true },
	label: { type: Object },
	spec_route: { type: String },
	introduce_route: { type: String },
	images: [{ type: String }],
	parts: [embeddedProductPart],
	branches: [embeddedProductBranch],
}).set('toJSON', {
	versionKey: false,
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
	},
});

export const Product = mongoose.model<IProduct>('product', productSchema);
