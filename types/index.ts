import { Types } from 'mongoose';

export interface ITopic {
	_id: Types.ObjectId;
	image_url: String;
	category: String;
	title: String;
	contents: String;
	route: String;
}
