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
	id: string;
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
	id: string;
	name: string;
	model: string;
	route: string;
	category_id: Types.ObjectId;
	sub_category_id: Types.ObjectId;
	tag_ids?: Types.DocumentArray<Types.ObjectId>;
	image_url: string;
	spec_route?: string;
	introduce_route?: string;
	branches: Types.DocumentArray<IProductBranch>;
	label?: {
		text: string;
		bg_color: string;
		font_color: string;
	};
	images?: string[];
	parts?: IProductPart[];
}

export type SimplifiedBranch = Pick<IProductBranch, 'color' | 'image_url' | 'model' | 'price' | 'id'>;
export type SimplifiedProduct = Pick<IProduct, 'name' | 'model' | 'route' | 'image_url' | 'label' | 'id'> & {
	branches: SimplifiedBranch[];
};

export interface IPromote {
	recommend: Types.DocumentArray<Types.ObjectId>;
	online_limited: Types.DocumentArray<Types.ObjectId>;
	new_item: Types.DocumentArray<Types.ObjectId>;
}
