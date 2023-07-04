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
	sub_categories: {
		name: string;
		route: string;
		order: number;
	}[];
}
