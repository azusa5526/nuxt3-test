import mongoose from 'mongoose';
import { IPromote } from '../../types/index';

const schema = new mongoose.Schema<IPromote>({
	recommend: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true }],
	online_limited: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true }],
	new_item: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true }],
}).set('toJSON', {
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
	},
});

export const Promote = mongoose.model<IPromote>('promote', schema);
