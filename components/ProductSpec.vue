<template>
	<ContentDoc class="spec-content" :path="`/prod/${$attrs.productModel}/spec`">
		<template #not-found>
			<div class="w-full p-8 text-center text-lg">-- Spec not found --</div>
		</template>
	</ContentDoc>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.spec-content {
	font-size: 14px;
	line-height: 24px;

	.container {
		width: 900px;
		margin: 40px auto 0;
		padding: 0 80px 40px;
	}

	dl {
		display: flex;
		flex-wrap: wrap;
	}

	dt {
		width: 40%;
	}

	dd {
		width: 60%;
	}

	.note > .title {
		margin: 12px 0;

		&:before {
			content: '';
			border-radius: 50%;
			background-color: #000;
			width: 1em;
			height: 1em;
			display: inline-block;
			vertical-align: middle;
			margin-right: 12px;
		}
	}

	hr {
		background-color: #bfbfbf;
		height: 1px;
		border: 0;
		max-width: 900px;
		margin: 0 auto;
	}

	.table {
		width: 100%;
		max-width: 900px;
		height: 100px;
		word-break: break-word;
		display: table;
		margin: 0 auto;
		margin-bottom: 240px;

		div {
			display: table-cell;
			width: calc(100% / 4);
			padding: 12px;
			box-sizing: border-box;
			text-align: center;
			border-top: 1px solid #bfbfbf;
			border-bottom: 1px solid #bfbfbf;

			&:nth-child(-n + 2) {
				border-right: 1px solid #bfbfbf;
			}
		}

		.title {
			margin-bottom: 20px;
		}
	}
}
</style>
