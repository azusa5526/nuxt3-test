import mongoose from 'mongoose';
import { initTopic } from './seed';

export default async () => {
	try {
		mongoose.set('strictQuery', false);
		console.log('url', useRuntimeConfig().apiSecret.MONGO_URL);
		await mongoose.connect(useRuntimeConfig().apiSecret.MONGO_URL);
		console.log('Successfully connected to DB.');
		await initTopic();
	} catch (error) {
		console.error('mongoose err', error);
		return createError({ statusCode: 500, statusMessage: 'Something went wrong.' });
	}
};
