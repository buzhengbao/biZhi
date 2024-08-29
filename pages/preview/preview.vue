<template>
	<view class="body">
		<swiper circular @change="changeImage">
			<swiper-item v-for="(item,index) in 5">
				<image @click="showMask" src="../../common/img/Snipaste_2024-08-16_18-55-26.jpg" mode="aspectFill">
				</image>
			</swiper-item>
		</swiper>
		<view class="mask" v-if="maskState">
			<!-- 后退 -->
			<view class="goBack" :style="{top: statusBarHeight + 'px'}" @click="goBack">
				<uni-icons type="back" color="#fff" size="20"></uni-icons>
			</view>
			<!-- 数字 -->
			<view class="count" :style="{top: statusBarHeight + 'px'}">
				{{ currentIndex+1 }}/{{ list.length }}
			</view>
			<!-- 时间 -->
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<!-- 底部 -->
			<view class="footer">
				<view class="box" @click="showPopup">
					<uni-icons type="info" size="35"></uni-icons>
					<view class="text">信息</view>
				</view>
				<view class="box" @click="showScore">
					<uni-icons type="star" size="35"></uni-icons>
					<view class="text">5分</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="35"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
	</view>
	<uni-popup ref="popup" type="bottom">
		<view class="popup">
			<view class="popupHeader">
				<view></view>
				<view class="title">图片信息</view>
				<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
			</view>
			<scroll-view scroll-y class="content">
				<view class="row">
					<view class="label">分类:</view>
					<view class="value">自然风光</view>
				</view>
				<view class="row">
					<view class="label">发布者:</view>
					<view class="value">嗒嘀嗒嘀嗒</view>
				</view>
				<view class="row">
					<view class="label">评分:</view>
					<view class="value rate">
						<uni-rate allow-half readonly :value="2.5" size="18" />
						<text class="score">2.5分</text>
					</view>
				</view>
				<view class="row">
					<view class="label">摘要:</view>
					<view class="value">自然风光</view>
				</view>
				<view class="row">
					<view class="label">标签:</view>
					<view class="value">自然风光</view>
				</view>
				<view class="copyright">
					声明：阿拉斯加客户的空间大师父和快速导航反馈的空间撒谎的卡号是可见的好卡好看的撒酒疯好卡刷卡机电话卡手机号的空间和的是咖啡。
				</view>
			</scroll-view>
		</view>
	</uni-popup>
	<uni-popup ref="score" :is-mask-click="false">
		<view class="popupScore">
			<view class="popupHeader">
				<view></view>
				<view class="title">图片信息</view>
				<uni-icons @click="closeScore" type="closeempty" size="18" color="#999"></uni-icons>
			</view>
			<view class="content">
				<uni-rate allow-half v-model="score1" />
				<text class="text">{{ score1 }}分</text>
			</view>
			<view class="footer">
				<button @click="SubmitScore" :disabled="!score1" size="mini" plain>确定评分</button>
			</view>
		</view>
	</uni-popup>


</template>

<script setup>
	import {
		proxyRefs,
		ref
	} from 'vue';
	// console.log(uni.getSystemInfoSync().statusBarHeight)
	const statusBarHeight1 = uni.getSystemInfoSync().statusBarHeight || 20
	const statusBarHeight = ref(statusBarHeight1)
	// console.log(statusBarHeight)

	const list = ref([1, 2, 3, 4, 5])
	let currentIndex = ref(0)
	const maskState = ref(true)
	// 遮罩层显隐
	const showMask = () => {
		maskState.value = !maskState.value
	}
	// 弹窗
	const popup = ref(null)
	const showPopup = () => {
		popup.value.open()
	}
	const score = ref(null)
	const showScore = () => {
		score.value.open()
	}
	const closeScore = () => {
		score.value.close()
	}
	// 得分
	const score1 = ref(0)
	const SubmitScore = () => {
		uni.showToast({
			title:'评分成功'
		})
		// 关闭弹窗
		score.value.close()
	}
	const changeImage = (e) => {
		// console.log('图片下标：', e)
		currentIndex.value = e.detail.current
	}
	 
	const goBack = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss">
	.body {
		width: 100%;
		height: 100vh;

		swiper {
			width: 100%;
			height: 100%;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.mask {
			.goBack {
				width: 70rpx;
				height: 70rpx;
				background: rgba(0, 0, 0, 0.5);
				border-radius: 50%;
				backdrop-filter: blur(10rpx);
				border: 1rpx solid rgba(255, 255, 255, 0.3);
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				top: 0;
				left: 30rpx;
			}

			.count {
				width: fit-content;
				background: rgba(0, 0, 0, 0.1);
				font-size: 28rpx;
				color: #fff;
				border-radius: 40rpx;
				padding: 8rpx 28rpx;
				backdrop-filter: blur(2rpx);
				position: absolute;
				top: 10vh;
				left: 0;
				right: 0;
				margin: auto;
			}

			.time {
				width: fit-content;
				font-size: 140rpx;
				color: #fff;
				line-height: 1em;
				text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
				position: absolute;
				top: calc(10vh + 80rpx);
				left: 0;
				right: 0;
				margin: auto;

			}

			.date {
				position: absolute;
				top: calc(10vh + 230rpx);
				left: 0;
				right: 0;
				margin: auto;
				width: fit-content;
				font-size: 34rpx;
				color: #fff;
				text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
			}

			.footer {
				background: rgba(255, 255, 255, 0.6);
				position: absolute;
				bottom: 10vw;
				left: 0;
				right: 0;
				margin: auto;
				width: 65vw;
				height: 120rpx;
				display: flex;
				align-items: center;
				justify-content: space-around;
				border-radius: 120rpx;
				box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.3);

				.box {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 2rpx 12rpx;

					.text {
						color: #777;
						font-size: 26rpx;
					}
				}
			}
		}
	}

	.popupHeader {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.title {
			font-size: 32rpx;
			font-weight: bold;
			color: #676767;
		}
	}

	.popup {
		background: #fff;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;

		.content {
			max-height: 50vh;

			.row {
				display: flex;
				padding: 16rpx 0;
				font-size: 28rpx;
				line-height: 1.5em;

				.label {
					color: #a7a7a7;
					width: 140rpx;
					text-align: right;
				}

				.value {
					flex: 1;
				}

				.rate {
					display: flex;
					align-items: center;

					.score {
						font-size: 26rpx;
						color: #676767;
						padding-left: 10rpx;
					}
				}
			}

			.copyright {
				background-color: #fff;
				color: #666;
				padding: 20rpx;
				border-radius: 10rpx;
				font-size: 26rpx;
				margin: 20rpx 0;
				line-height: 1.6em;
			}
		}
	}

	.popupScore {
		background-color: #fff;
		padding: 30rpx;
		width: 70vw;
		border-radius: 30rpx;

		.content {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 30rpx 0;

			.text {
				padding-left: 10rpx;
				width: 80rpx;
				color: #ffca3e;
				line-height: 1rem;
				text-align: right;
			}
		}

		.footer {
			display: flex;
			justify-content: center;
		}
	}
</style>