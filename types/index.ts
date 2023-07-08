import { Types } from 'mongoose';

export interface ITopic {
	image_url: string;
	category: string;
	title: string;
	contents: string;
	route: string;
}

export interface ICategory {
	image_url: string;
	name: string;
	route: string;
	order: number;
	sub_categories: Types.DocumentArray<ISubCategories>;
}

export interface ISubCategories {
	name: string;
	route: string;
	order: number;
}

export interface IProductBranch {
	color: Types.Array<string>;
	image_url: string;
	model: string;
	is_release: boolean;
	release_at?: string;
	stock_quantity?: number;
	price: string;
}

export interface IProductPart {
	name: string;
	price: string;
	route?: string;
	note?: string;
}

export interface IProduct {
	name: string;
	model: string;
	route: string;
	category_id: string;
	sub_category_id: string;
	tag_ids?: string[];
	image_url: string;
	spec_route?: string;
	introduce_route?: string;
	branch?: Types.DocumentArray<IProductBranch>;
	label?: {
		text: string;
		bg_color: string;
		font_color: string;
	};
	images?: string[];
	parts?: IProductPart[];
}
