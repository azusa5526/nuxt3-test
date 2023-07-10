import mongoose from 'mongoose';
import { IPromote } from '../../types/index';

const schema = new mongoose.Schema<IPromote>({
	recommend: { type: [String], required: true },
	online_limited: { type: [String], required: true },
	new_item: { type: [String], required: true },
}).set('toJSON', {
	versionKey: false,
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
	},
});

export const Promote = mongoose.model<IPromote>('promote', schema);
