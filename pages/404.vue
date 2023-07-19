<template>
	<div class="mb-36 mt-[200px] flex flex-col items-center text-center">
		<div class="mb-[60px] text-2xl">お探しのページは見つかりませんでした。</div>
		<p class="mb-24 text-sm leading-7">
			申し訳ありません。
			<br />
			お探しのページは一時的にアクセスが出来ない状況にあるか、
			<br />
			もしくは移動、削除され見つけることができません。
		</p>
		<button
			class="w-64 border border-gray-300 p-2 text-sm font-bold hover:opacity-70"
			@click="$router.push({ path: '/', replace: true })"
		>
			TOPに戻る
		</button>
	</div>
</template>

<script lang="ts" setup></script>
