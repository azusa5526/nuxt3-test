import { Category } from './models/category';
import { Product } from './models/product';
import { Promote } from './models/promote';
import { TopSlide } from './models/top-slides';
import { NaviContent } from './models/navi-contents';
import { Topic } from './models/topic';
import { Types } from 'mongoose';

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
				_id: new Types.ObjectId('64affe9d70f6308bc6bf1399'),
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
				_id: new Types.ObjectId('64affe9d70f6308bc6bf139e'),
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
				_id: new Types.ObjectId('64affe9d70f6308bc6bf13a0'),
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

async function initNaviContents() {
	const slideCount = await NaviContent.count();
	if (!slideCount) {
		NaviContent.create([
			{
				image_url: '/upload/contents/navi/top_bnr_navi01.jpg',
				route: '/headphone/navi/',
				title_jp: 'ヘッドホン・イヤホンナビ',
				title_eng: 'Headphone Earphone Navi',
				content:
					'スマートフォンとともに日々の暮らしに欠かせないヘッドホン・イヤホン。あなたが好きな音楽や動画をより快適に聴くために、何を基準に選べばいいか？ たくさんのヒントをご用意しました。お気に入りの1台にきっと出会えます。',
			},
			{
				image_url: '/upload/contents/navi/top_bnr_navi02.jpg',
				route: '/cartridge/navi/',
				title_jp: 'リスニング レコード ナビ',
				title_eng: 'Listening Record Navi',
				content:
					'時代は変わり、おうちで過ごす時間が増えました。レコードで音楽を聴きながら穏やかな時を過ごしたい。でも、何から揃えていけばいいかわからない。初めてレコードを体験する方でも安心して始められるノウハウをお届けします。',
			},
			{
				image_url: '/upload/contents/navi/top_bnr_navi03.jpg',
				route: '/microphone/navi/',
				title_jp: 'マイクロホンナビ',
				title_eng: 'Microphone Navi',
				content:
					'いい音で動画配信をしたい。テレワークでの打ち合わせで、相手にクリアな声を届けたい。その願いを叶えるマイクロホンには、さまざまな種類があります。あなたが使う目的に合わせて、最適な1本を選ぶためのお手伝いをします。',
			},
		]);
	}
}

async function initTopic() {
	const topicCount = await Topic.count();
	if (!topicCount) {
		console.log('Do initTopic');
		Topic.create([
			{
				image_url: '/upload/contents/topic/topic_1.jpg',
				category: 'CAMPAIGN',
				title: '【オリジナルフォンタブ：プレゼント】',
				content:
					'オンラインストア限定販売 ATH-SQ1TW STB の発売を記念して、Audio-Technicaオリジナルの『フォンタブ』ご用意しました。公式オンラインストアにて、ATH-SQ1TW STB(EGR／SBK／SWH)お買い上げのお客様にもれなくプレゼント。(数量限定)',
				route: '/novelty_phonetab',
				create_time: new Date('2023-07-15 08:00:00'),
			},
			{
				image_url: '/upload/contents/topic/topic_2.jpg',
				category: 'PRODUCTS',
				title: '【ATH-SQ1TW STB】',
				content: 'イヤホンと充電ケースに再生プラスチックを配合した素材を使用した完全ワイヤレス',
				route: '/product/ATH-SQ1TW_STB',
				create_time: new Date('2023-07-15 09:00:00'),
			},
			{
				image_url: '/upload/contents/topic/topic_3.jpg',
				category: 'PRODUCTS',
				title: '【ワイヤレスヘッドホン ATH-M20xBT】',
				content: '購入後のアンケートよりいただいたお客様の声ご感想をご紹介',
				route: '/ATH-M20xBT/#uv',
				create_time: new Date('2023-07-15 10:00:00'),
			},
			{
				image_url: '/upload/contents/topic/topic_4.jpg',
				category: 'PRODUCTS',
				title: '【ATH-M50xSTS-USB】',
				content: 'ストリーマーやコンテンツクリエイターのために設計されたヘッドセット',
				route: '/product/ATH-M50xSTS-USB',
				create_time: new Date('2023-07-15 11:00:00'),
			},
			{
				image_url: '/upload/contents/topic/topic_5.jpg',
				category: 'PRODUCTS',
				title: '【AT-SB727 WH】',
				content: '久しぶりにレコードを聴きたくなった人には少しなつかしい、これからレコードを始める人にはとても新鮮。',
				route: '/product/AT-SB727_WH',
				create_time: new Date('2023-07-15 12:00:00'),
			},
			{
				image_url: '/upload/contents/topic/topic_6.jpg',
				category: 'INFOMARTION',
				title: '【会員登録】',
				content: 'オーディオテクニカからのメールを受信していただくとお誕生日クーポンなどのお得な情報をお送りします。',
				route: '/member/',
				create_time: new Date('2023-07-15 13:00:00'),
			},
			{
				image_url: '/upload/contents/topic/topic_7.jpg',
				category: 'SHORT SHORT STORY',
				title: 'アニメーション：',
				content: 'vol.139『次元』公開。 ＜音＞にまつわる、ちょっと不思議な世界をお楽しみください！',
				route: '/shortshortstory/',
				create_time: new Date('2023-07-15 14:00:00'),
			},
		]);
	}
}

export { initCategory, initProduct, initPromote, initSlides, initNaviContents, initTopic };
