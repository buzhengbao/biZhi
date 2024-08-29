<template>
	<view class="userLayout pageBg">
		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/logo.png"></image>
			</view>
			<view class="ip">12093702173</view>
			<view class="address">来自：哈尔滨</view>
		</view>

		<view class="section">
			<view class="list">
				<view class="row" v-for="item in 3">
					<view class="left">
						<uni-icons type="notification" size="20"></uni-icons>
						<view class="text">我的下载</view>
					</view>
					<view class="right">
						<view class="text">22</view>
						<uni-icons type="right" size="18"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="section">
			<view class="list">
				<view class="row" v-for="item in 3">
					<view class="left">
						<uni-icons type="notification" size="20"></uni-icons>
						<view class="text">我的下载</view>
					</view>
					<view class="right">
						<view class="text">22</view>
						<uni-icons type="right" size="18"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.uni-icons{
		color: $theme-color !important;
	}
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
		.section{
			width: 690rpx;
			margin: 30rpx auto;
			border: 1rpx solid #eee;
			border-radius: 10rpx;
			box-shadow: 0 0 15rpx rgba(0, 0, 0, 0.2);
			background-color: #fff;
			.list{
				.row{
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 20rpx 30rpx;
					border-bottom: 1rpx solid #eee;
					&:last-child{
						border-bottom: 0;
					}
					.left{
						display: flex;
						align-items: center;
						.text{
							padding-left: 20rpx;
							color: $theme-text-color;
						}
					}
					.right{
						display: flex;
						align-items: center;
						.text{
							font-size: 29rpx;
							color: $theme-text-color;
						}
					}
				}
			}
		}
	}
</style>