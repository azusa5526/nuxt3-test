import { Topic } from './models/topic';
import { Category } from './models/category';

async function initTopic() {
	const topicCount = await Topic.count();
	if (!topicCount) {
		console.log('Do initTopic');
		Topic.create([
			{
				image_url: 'https://dummyimage.com/720X540/34eb83/fff',
				category: 'CAMPAIGN',
				title: 'オリジナルフォンタブ：プレゼント',
				contents:
					'オンラインストア限定販売 ATH-SQ1TW STB の発売を記念して、Audio-Technicaオリジナルの『フォンタブ』ご用意しました。公式オンラインストアにて、ATH-SQ1TW STB(EGR／SBK／SWH)お買い上げのお客様にもれなくプレゼント。(数量限定)',
				route: '/novelty_phonetab',
			},
			{
				image_url: 'https://dummyimage.com/720X540/34eb83/fff',
				category: 'CAMPAIGN',
				title: '会員登録キャンペーン',
				contents: '事前会員登録でクーポンコードプレゼント!! 会員登録期間: 6月26日〜7月14日',
				route: '/member',
			},
		]);
	}
}

async function initCategory() {
	const categoryCount = await Category.count();
	if (!categoryCount) {
		console.log('Do initCategory');
		Category.create([
			{
				image_url: 'https://dummyimage.com/500X370/34eb83/fff',
				name: 'headphones',
				route: '/category/headphone/',
				order: 1,
				sub_categories: [
					{
						name: 'ワイヤード',
						route: '/category/headphone/wired/',
						order: 1,
					},
					{
						name: 'ワイヤレス',
						route: '/category/headphone/wireless/',
						order: 2,
					},
					{
						name: 'DJ/モニター',
						route: '/category/headphone/dj-monitor/',
						order: 3,
					},
					{
						name: 'ハイエンド',
						route: '/category/headphone/highend/',
						order: 4,
					},
					{
						name: 'アクセサリー',
						route: '/category/headphone/accessorie/',
						order: 5,
					},
				],
			},
			{
				image_url: 'https://dummyimage.com/500X370/34eb83/fff',
				name: 'earphones',
				route: '/category/earphone/',
				order: 2,
				sub_categories: [
					{
						name: 'ワイヤード',
						route: '/category/earphone/wired/',
						order: 1,
					},
					{
						name: 'ワイヤレス',
						route: '/category/earphone/wireless/',
						order: 2,
					},
					{
						name: '完全ワイヤレス',
						route: '/category/earphone/true-wireless/',
						order: 3,
					},
					{
						name: 'ハイエンド',
						route: '/category/earphone/highend/',
						order: 4,
					},
					{
						name: 'アクセサリー',
						route: '/category/earphone/accessorie/',
						order: 5,
					},
				],
			},
		]);
	}
}

export { initTopic, initCategory };
