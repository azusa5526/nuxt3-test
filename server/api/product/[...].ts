import { Product } from '../../models/product';
import { Promote } from '../../models/promote';
import { Types, FilterQuery } from 'mongoose';
import { ProductType } from '../../models/product-type';
import { ProductSeries } from '../../models/product-series';

const router = createRouter();

interface ProductQueryParams {
	category_id?: string;
	sub_category_id?: string;
	type_ids?: string[];
	series_ids?: string[];
	full_spec?: string;
}

router.get(
	'/',
	defineEventHandler(async (event) => {
		const query: ProductQueryParams = getQuery(event);
		const filters: FilterQuery<Omit<ProductQueryParams, 'full_spec'>> = {};
		const { category_id, sub_category_id } = query;
		const type_ids = typeof query.type_ids === 'string' ? [query.type_ids] : query.type_ids;
		const series_ids = typeof query.series_ids === 'string' ? [query.series_ids] : query.series_ids;
		const full_spec = query.full_spec === 'true';

		if (category_id && Types.ObjectId.isValid(category_id)) filters.category_id = category_id;
		if (sub_category_id && Types.ObjectId.isValid(sub_category_id)) filters.sub_category_id = sub_category_id;
		if (type_ids && type_ids.length > 0)
			filters.type_ids = { $in: type_ids?.map((type_id) => new Types.ObjectId(type_id)) };
		if (series_ids && series_ids.length > 0)
			filters.series_ids = { $in: series_ids?.map((series_id) => new Types.ObjectId(series_id)) };

		let products;
		let types;
		let series;

		if (sub_category_id) types = await findProductTypes(sub_category_id);
		series = await findProductSeries(category_id, sub_category_id);

		try {
			products = await Product.find({
				...filters,
			}).select(
				full_spec
					? {}
					: 'name model route image_url label branches.color branches.image_url branches.model branches.price branches._id'
			);
		} catch (error) {
			console.error('Get products err', error);
		}

		return {
			products: products,
			types: types,
			series: series,
		};
	})
);

router.get(
	'/:id',
	defineEventHandler(async (event) => {
		const productId = event.context.params?.id;
		if (!productId || !Types.ObjectId.isValid(productId)) {
			throw createError({
				statusCode: 400,
				statusMessage: 'id is not valid value',
			});
		}

		let product;
		try {
			product = await Product.findOne({ _id: productId });
		} catch (error) {
			throw createError({
				statusCode: 500,
				statusMessage: `Get product err, ${error}`,
			});
		}

		return product;
	})
);

router.get(
	'/model/:modelName',
	defineEventHandler(async (event) => {
		const modelName = event.context.params?.modelName;

		let product;
		try {
			product = await Product.findOne({ model: modelName });
		} catch (error) {
			throw createError({
				statusCode: 500,
				statusMessage: `Get product err, ${error}`,
			});
		}

		return product;
	})
);

router.get(
	'/promote',
	defineEventHandler(async (event) => {
		const query = getQuery(event);
		const promoteTypes = ['recommend', 'online_limited', 'new_item'] as const;
		const type = promoteTypes.find((item) => item === query.type);

		if (type) {
			try {
				const promote = await Promote.findOne({}, type)
					.populate({
						path: type,
						select:
							'name model route description image_url label branches.color branches.image_url branches.model branches.price branches._id branches.release_at',
					})
					.exec();
				return promote?.[type as (typeof promoteTypes)[number]];
			} catch (error) {
				console.error('get promote products err', error);
			}
		} else {
			try {
				const promote = await Promote.findOne({});
				return promote;
			} catch (error) {
				console.error('get promote err', error);
			}
		}
	})
);

async function findProductTypes(subCategoryId: string) {
	try {
		const productTypes = await ProductType.find({
			sub_category_ids: { $in: subCategoryId },
		}).exec();

		console.log('productTypes', productTypes);

		return productTypes;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

async function findProductSeries(categoryId?: string, subCategoryId?: string) {
	const matchCriteria: Record<string, any> = {};

	if (categoryId && Types.ObjectId.isValid(categoryId)) matchCriteria.category_ids = new Types.ObjectId(categoryId);
	if (subCategoryId && Types.ObjectId.isValid(subCategoryId))
		matchCriteria.sub_category_ids = new Types.ObjectId(subCategoryId);

	try {
		const productSeries = await ProductSeries.aggregate([
			{
				$match: matchCriteria,
			},
			{
				$project: {
					name: 1,
					category_ids: 1,
					sub_category_ids: 1,
					id: '$_id',
					_id: 0,
				},
			},
		]).exec();

		return productSeries;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export default useBase('/api/product/', router.handler);
