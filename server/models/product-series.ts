import mongoose from 'mongoose';
import { IProductSeries } from '../../types/index';

const schema = new mongoose.Schema<IProductSeries>({
	name: { type: String, required: true },
	category_ids: { type: [mongoose.Schema.Types.ObjectId], required: true },
	sub_category_ids: { type: [mongoose.Schema.Types.ObjectId], required: true },
}).set('toJSON', {
	versionKey: false,
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
	},
});

export const ProductSeries = mongoose.model<IProductSeries>('product-series', schema);
