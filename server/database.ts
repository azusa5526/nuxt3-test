import mongoose from 'mongoose';
import { initTopic, initCategory, initProduct } from './seed';

export default async () => {
	try {
		mongoose.set('strictQuery', false);
		console.log('url', useRuntimeConfig().apiSecret.MONGO_URL);
		await mongoose.connect(useRuntimeConfig().apiSecret.MONGO_URL);
		console.log('Successfully connected to DB.');
		await initTopic();
		await initCategory();
		await initProduct();
	} catch (error) {
		console.error('mongoose err', error);
		return createError({ statusCode: 500, statusMessage: 'Something went wrong.' });
	}
};
