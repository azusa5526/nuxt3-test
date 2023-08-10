import mongoose from 'mongoose';
import {
	initTopic,
	initCategory,
	initProduct,
	initPromote,
	initSlides,
	initNaviContents,
	initNews,
	initProductType,
	initProductSeries,
} from './seed';

export default async () => {
	try {
		mongoose.set('strictQuery', false);
		console.log('url', useRuntimeConfig().apiSecret.MONGO_URL);
		await mongoose.connect(useRuntimeConfig().apiSecret.MONGO_URL);
		console.log('Successfully connected to DB.');
		// await mongoose.syncIndexes();

		initTopic();
		initCategory();
		initProduct();
		initPromote();
		initSlides();
		initNaviContents();
		initNews();
		initProductType();
		initProductSeries();
	} catch (error) {
		console.error('mongoose err', error);
		return createError({ statusCode: 500, statusMessage: 'Something went wrong.' });
	}
};
