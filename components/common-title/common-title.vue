<template>
	<view class="common-title">
		<view class="left">
			<slot name="left"></slot>
		</view>
		<view class="right">
			<slot name="right"></slot>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.common-title{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
}
</style>