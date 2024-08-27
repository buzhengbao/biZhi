<template>
	<view class="body pageBg">
		<view class="classify">
			<theme-item v-for="item in 15"></theme-item>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.body {
		.classify {
			// margin-top: 30rpx;
			display: grid;
			//网格间距
			gap: 15rpx;
			//一行几个，宽度自动（fr是响应单位）
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>