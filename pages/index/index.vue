<template>
	<view class="body pageBg">
		<view class="banner">
			<swiper autoplay circular indicator-dots>
				<swiper-item v-for="item in 3">
					<image src="../../common/img/Snipaste_2024-08-16_21-24-04.jpg"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text>公告</text>
			</view>
			<view class="center">
				<swiper autoplay circular interval="2000" vertical>
					<swiper-item v-for="item in 3">
						<text>公告1</text>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="forward" size="20"></uni-icons>
			</view>
		</view>
		<!--每日推荐-->
		<view class="selelt">
			<common-title>
				<template #left>
					<text class="name">每日推荐</text></template>
				<template #right>
					<view class="date">
						<uni-icons type="calendar" size="15"></uni-icons>
						<text class="text">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
						</text>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="item in 8">
						<image src="../../common/img/Snipaste_2024-08-16_18-55-26.jpg" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<!--专题推荐-->
		<view class="theme">
			<common-title>
				<template #left>
					<text class="name">专题推荐</text>
				</template>
				<template #right>
					<navigator url="" class="more">More+</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in 8"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss">
	.uni-icons{
		color: $theme-color !important;
	}
	.body {
		width: 100vw;
		padding: 0 30rpx;

		.banner {
			width: 100%;
			padding: 30rpx 0;

			swiper {
				width: 100%;
				height: 340rpx;

				image {
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
		}

		.notice {
			width: 690rpx;
			height: 80rpx;
			background-color: #f9f9f9;
			border-radius: 80rpx;
			display: flex;
			line-height: 80rpx;
			overflow: hidden;

			.left {
				width: 150rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				text {
					font-size: 28rpx;
					font-weight: bold;
					color: $theme-color;
				}
			}

			.center {
				flex: 1;

				swiper {
					width: 100%;
					height: 100%;

					swiper-item {
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						font-size: 30rpx;
						color: $theme-color;
					}
				}
			}

			.right {
				width: 60rpx;
				text-align: center;
			}
		}

		.selelt {
			padding-top: 10rpx;
			width: 100%;

			.name {
				color: #FF9800;
				font-size: 40rpx;
				font-weight: bold;
			}

			.date {
				display: flex;
				align-items: center;
				color: #32CD32;

				.text {
					margin-left: 5rpx;
					font-weight: bold;
				}

			}

			.content {
				margin-top: 30rpx;

				scroll-view {
					white-space: nowrap;

					.box {
						width: 200rpx;
						height: 430rpx;
						margin-right: 15rpx;
						display: inline-block;

						image {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	
		.theme{
			padding: 50rpx 0;
			.name {
				color: #FF9800;
				font-size: 40rpx;
				font-weight: bold;
			}
			.more{
				font-size: 32rpx;
				color: $theme-color;
			}
			.content{
				margin-top: 30rpx;
				display: grid;
				gap: 15rpx;
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
</style>