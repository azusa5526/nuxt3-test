import { TopSlide } from '../../models/top-slides';

export default defineEventHandler(async () => {
	try {
		const slides = await TopSlide.find();
		return slides;
	} catch (error) {
		console.error('get slides err', error);
	}
});
