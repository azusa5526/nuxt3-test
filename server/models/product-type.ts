import mongoose from 'mongoose';
import { IProductType } from '../../types/index';

const schema = new mongoose.Schema<IProductType>({
	name: { type: String, required: true },
	sub_category_ids: { type: [mongoose.Schema.Types.ObjectId], required: true },
}).set('toJSON', {
	versionKey: false,
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
	},
});

export const ProductType = mongoose.model<IProductType>('product-type', schema);
