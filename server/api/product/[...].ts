import { Product } from '../../models/product';
import { Promote } from '../../models/promote';
import { Types } from 'mongoose';
import { ProductType } from '../../models/product-type';

const router = createRouter();

interface ProductQueryParams {
	category_id?: string;
	sub_category_id?: string;
	product_types?: string[];
	full_spec?: string;
}

router.get(
	'/',
	defineEventHandler(async (event) => {
		const query: ProductQueryParams = getQuery(event);
		const filters: Omit<ProductQueryParams, 'full_spec'> = {};
		const { category_id, sub_category_id, product_types } = query;
		const full_spec = query.full_spec === 'true';

		console.log('query product_types', product_types);

		if (category_id && Types.ObjectId.isValid(category_id)) filters.category_id = category_id;
		if (sub_category_id && Types.ObjectId.isValid(sub_category_id)) filters.sub_category_id = sub_category_id;

		let products;
		let types;

		if (sub_category_id) {
			types = await findProductTypesBySubCategoryId(sub_category_id);
			console.log('find types', types);
		}

		try {
			products = await Product.find(filters).select(
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

		try {
			const product = await Product.find({ _id: productId });
			return product ? product : [];
		} catch (error) {
			throw createError({
				statusCode: 500,
				statusMessage: `Get product err, ${error}`,
			});
		}
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

async function findProductTypesBySubCategoryId(subCategoryId: string) {
	try {
		const productTypes = await ProductType.find({
			sub_category_ids: { $in: subCategoryId },
		}).exec();

		return productTypes;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export default useBase('/api/product/', router.handler);
