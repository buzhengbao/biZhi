<template>
	<view class="userLayout pageBg">
		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/logo.png"></image>
			</view>
			<view class="ip">12093702173</view>
			<view class="address">来自：哈尔滨</view>
		</view>

		<view class="section"></view>
		<view class="section"></view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.userLayout {
		.userInfo {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 50rpx 0;
			.avatar{
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.ip{
				font-size: 44rpx;
				color: #333;
				padding: 20rpx 0 5rpx;
			}
			.address{
				font-size: 28rpx;
				color: #333;
			}
		}
	}
</style>