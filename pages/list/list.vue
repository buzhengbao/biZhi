<template>
	<view class="body">
		<view class="content">
			<navigator url="/pages/preview/preview" class="item" v-for="item in 10">
				<image mode="aspectFill" src="../../common/img/Snipaste_2024-08-16_18-52-04.jpg"></image>
			</navigator>
		</view>
	</view>	
</template>

<script setup>

</script>

<style lang="scss">
	.body{
		.content{
			display: grid;
			gap: 5rpx;
			grid-template-columns: repeat(3, 1fr);
			padding: 5rpx;
			.item{
				height: 440rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
