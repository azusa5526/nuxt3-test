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
	sub_categories: Types.DocumentArray<ISubCategory>;
}

export interface Category extends ICategory {
	id: string;
}

export interface ISubCategory {
	name: string;
	route: string;
	order: number;
}

export interface SubCategory extends ISubCategory {
	id: string;
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
	description?: string;
	category_id: Types.ObjectId;
	sub_category_id: Types.ObjectId;
	function_ids?: Types.DocumentArray<Types.ObjectId>;
	type_ids?: Types.DocumentArray<Types.ObjectId>;
	series_ids?: Types.DocumentArray<Types.ObjectId>;
	image_url: string;
	technical_data?: TechnicalData;
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

export interface TechnicalData {
	spec: {
		title?: string;
		items: {
			name: string;
			value: string | string[];
		}[];
	}[];
	info?: {
		accessories?: string;
		sold_separately?: string;
	};
	notice?: string;
	models: {
		name: string;
		jan_code: string;
		release_at: string;
	}[];
}

export type Product = Omit<IProduct, 'category_id' | 'sub_category_id'> & {
	category_id: string;
	sub_category_id: string;
};

export type SimplifiedBranch = Pick<IProductBranch, 'color' | 'image_url' | 'model' | 'price' | 'id' | 'release_at'>;
export type SimplifiedProduct = Pick<
	IProduct,
	'name' | 'model' | 'route' | 'image_url' | 'label' | 'id' | 'description'
> & {
	branches: SimplifiedBranch[];
};

export interface IPromote {
	recommend: Types.DocumentArray<Types.ObjectId>;
	online_limited: Types.DocumentArray<Types.ObjectId>;
	new_item: Types.DocumentArray<Types.ObjectId>;
}

export interface ITopSlide {
	route: string;
	image_url: string;
	title?: string;
	description?: string;
}

export interface INaviContent {
	route: string;
	image_url: string;
	title_jp: string;
	title_eng: string;
	content: string;
}

export interface ITopic {
	route: string;
	image_url: string;
	category: string;
	title: string;
	content: string;
	create_time: Date;
}

export type Topic = Omit<ITopic, 'create_time'> & { create_time: string };

export interface INews {
	route: string;
	image_url: string;
	news_route: string;
	category_id: Types.ObjectId;
	content: string;
	create_time: Date;
}

export type News = Omit<INews, 'create_time'> & { create_time: string; id: string };

export interface IProductType {
	name: string;
	sub_category_ids: Types.DocumentArray<Types.ObjectId>;
}

export type ProductType = IProductType & { id: string };
