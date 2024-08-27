<template>
	<view class="themeItem">
		<navigator v-if="!isMore" url="../../pages/list/list" class="box">
			<image class="pic" src="../../common/img/Snipaste_2024-08-16_18-52-04.jpg"></image>
			<view class="mask">水果饮料</view>
			<view class="tab">3天前更新</view>
		</navigator>
		<navigator v-else url="../../pages/classify/classify" class="box more">
			<image class="pic" src="../../common/img/Snipaste_2024-08-16_18-55-26.jpg"></image>
			<view class="mask">
				<uni-icons type="more-filled" color="#fff" size="34"></uni-icons>
				<text class="text">更多</text>
			</view>
		</navigator>
	</view>
</template>

<script setup>
	defineProps({
		isMore:{
			type:Boolean,
			default:false
		}
	})
</script>

<style lang="scss" scoped>
	.themeItem {
		.box {
			height: 340rpx;
			border-radius: 10rpx;
			overflow: flow;
			position: relative;
			.pic{
				width: 100%;
				height: 100%;
			}
			.mask{
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 70rpx;
				background-color: rgba(0, 0, 0, 0.2);
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				// 模糊效果
				backdrop-filter: blur(20rpx);
				font-weight: bold;
				font-size: 35rpx
			}
			.tab{
				position: absolute;
				top: 0;
				left: 0;
				background: rgba(255, 85, 0, 0.6);
				// 模糊效果
				backdrop-filter: blur(20rpx);
				color: #fff;
				font-style: 22rpx;
				padding: 6rpx 14rpx;
				border-radius: 0 0 20rpx 0;
				// 缩放
				transform: scale(0.8);
				transform-origin: left;
			}
		}
		
		.box.more{
			.mask{
				width: 100%;
				height: 100%;
				flex-direction: column;
			}
			.text{
				font-size: 30rpx;
				font-weight: bold;
			}
		}
	}
</style>