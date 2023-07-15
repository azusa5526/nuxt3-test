import { Product } from '../../models/product';
import { Promote } from '../../models/promote';
import { Types } from 'mongoose';

const router = createRouter();

interface ProductQueryParams {
	category_id?: string;
	sub_category_id?: string;
	full_spec?: string;
}

router.get(
	'/',
	defineEventHandler(async (event) => {
		const query: ProductQueryParams = getQuery(event);
		const filters: Omit<ProductQueryParams, 'full_spec'> = {};
		const { category_id, sub_category_id } = query;
		const full_spec = query.full_spec === 'true';

		if (category_id && Types.ObjectId.isValid(category_id)) filters.category_id = category_id;
		if (sub_category_id && Types.ObjectId.isValid(sub_category_id)) filters.sub_category_id = sub_category_id;
		try {
			const products = await Product.find(filters).select(
				full_spec
					? {}
					: 'name model route image_url label branches.color branches.image_url branches.model branches.price branches._id'
			);
			return products;
		} catch (error) {
			console.error('Get products err', error);
		}
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

export default useBase('/api/product/', router.handler);
