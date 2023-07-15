import { Topic } from './models/topic';
import { Category } from './models/category';
import { Product } from './models/product';
import { Promote } from './models/promote';
import { TopSlide } from './models/top-slides';
import mongoose from 'mongoose';

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

async function initPromote() {
	const promote = await Promote.count();
	if (!promote) {
		console.log('Do initPromote');
		Promote.create({
			recommend: [],
			online_limited: [],
			new_item: [],
		});
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

async function initProduct() {
	const productCount = await Product.count();
	if (!productCount) {
		console.log('Do initProduct');
		Product.create([
			{
				_id: new mongoose.Types.ObjectId('64affe9d70f6308bc6bf1399'),
				name: 'プロフェッショナルモニターヘッドホン',
				model: 'ATH-M50x',
				route: 'ATH-M50x',
				description: '世界が認めた“M50”の次世代モデル。現場のニーズに応える高解像度モニターヘッドホン。',
				category_id: '64a4b9b3ace1c8690163d984',
				sub_category_id: '64a4b9b3ace1c8690163d985',
				tag_ids: ['67a56d89a1c3cb6613d0ac95'],
				image_url: 'https://dummyimage.com/500X500/13c0f0/fff',
				label: {
					text: '発売記念キャンペーン!!',
					bg_color: 'cc9900',
					font_color: 'FFFFFF',
				},
				spec_route: null,
				introduce_route: null,
				images: [
					'https://dummyimage.com/500X500/13c0f0/fff',
					'https://dummyimage.com/500X500/e83333/fff',
					'https://dummyimage.com/500X500/33e645/fff',
				],
				parts: [
					{
						name: 'ポーチ BK',
						price: '1,000',
						route: null,
						note: '色：黒',
					},
					{
						name: '着脱カールコード（変換プラグアダプター付き） BK',
						price: '2,200',
						route: null,
						note: '色：黒',
					},
				],
				branches: [
					{
						color: ['000000'],
						image_url: '/upload/contents/product/ATH-M50x/branch_2805_image_0.jpg',
						model: 'ATH-M50x',
						is_release: true,
						release_at: null,
						stock_quantity: 10,
						price: '19,000',
					},
					{
						color: ['ffffff'],
						image_url: '/upload/contents/product/ATH-M50x/branch_2806_image_6.jpg',
						model: 'ATH-M50x WH',
						is_release: true,
						release_at: '2021-08-03T16:20:17.717+08:00',
						stock_quantity: 2,
						price: '21,000',
					},
				],
			},
			{
				_id: new mongoose.Types.ObjectId('64affe9d70f6308bc6bf139e'),
				name: 'ワイヤレスヘッドホン',
				model: 'ATH-TWX9',
				route: 'ATH-TWX9',
				description: '人と心をつなぐ、革新のサウンド。特別な静寂を仕立てるノイズキャンセリング。',
				category_id: '64a4b9b3ace1c8690163d98a',
				sub_category_id: '64a4b9b3ace1c8690163d98d',
				tag_ids: null,
				image_url: 'https://dummyimage.com/500X500/377ded/fff',
				spec_route: null,
				introduce_route: null,
				images: ['https://dummyimage.com/500X500/377ded/fff', 'https://dummyimage.com/500X500/e83333/fff'],
				parts: null,
				branches: [
					{
						color: null,
						image_url: 'https://dummyimage.com/500X500/377ded/fff',
						model: 'ATH-TWX9',
						is_release: true,
						release_at: '2021-08-03T16:20:17.717+08:00',
						stock_quantity: 1,
						price: '36,300',
					},
				],
			},
			{
				_id: new mongoose.Types.ObjectId('64affe9d70f6308bc6bf13a0'),
				name: 'ワイヤレスヘッドホン',
				model: 'ATH-M50xBT2',
				route: 'ATH-M50xBT2',
				description: '世界が認める音響パフォーマンスをワイヤレスで。アップグレードモデル“Version2”登場。',
				category_id: '64a4b9b3ace1c8690163d984',
				sub_category_id: '64a4b9b3ace1c8690163d986',
				tag_ids: null,
				image_url: 'https://dummyimage.com/500X500/13c0f0/fff',
				spec_route: null,
				introduce_route: null,
				images: ['https://dummyimage.com/500X500/13c0f0/fff', 'https://dummyimage.com/500X500/e83333/fff'],
				parts: null,
				branches: [
					{
						color: ['f06813'],
						image_url: 'https://dummyimage.com/500X500/f06813/fff',
						model: 'ATH-M50xBT2',
						is_release: true,
						release_at: '2021-08-03T16:20:17.717+08:00',
						stock_quantity: 7,
						price: '23,200',
					},
				],
			},
		]);
	}
}

async function initSlides() {
	const slideCount = await TopSlide.count();
	if (!slideCount) {
		TopSlide.create([
			{
				image_url: '/upload/contents/top/top-imgSQ1TWSTB.jpg',
				route: 'https://www.audio-technica.co.jp/product/ATH-SQ1TW_STB',
				title: 'ATH-SQ1TW STB',
				description: '<p>地球とつながる、フルワイヤレス。<br>発売記念『フォンタブ』プレゼント!!</p>',
			},
			{
				image_url: '/upload/contents/top/top-imgAT-SB727.jpg',
				route: 'https://www.audio-technica.co.jp/category/analog-product/',
				title: 'AT-SB727',
				description: '<p>アナログに恋をする。<br>レコードを挟んでどこでも楽しめるサウンドバーガー</p>',
			},
			{
				image_url: '/upload/contents/top/top-imgAT2020USB-XP.jpg',
				route: 'https://www.audio-technica.co.jp/product/AT2020USB-XP',
				title: 'AT2020USB-XP',
				description: '<p>周囲環境や収音用途に応じて音質を最適化できる<br>プロ仕様のコンデンサーUSBマイクロホン</p>',
			},
			{
				image_url: '/upload/contents/top/top-GL3ZIN.jpg',
				route: 'https://www.audio-technica.co.jp/category/headphone/wired/',
				title: 'MONSTER HUNTER',
				description: '<p>モンスターハンターをモチーフとした<br>限定生産ゲーミングヘッドセット</p>',
			},
		]);
	}
}

export { initTopic, initCategory, initProduct, initPromote, initSlides };
