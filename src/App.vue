<template>
  <div class="app-container">
    <!-- header -->
    <mt-header  fixed title="我的Vue项目"></mt-header>
    <!-- router-view -->
		<transition>		
			<router-view></router-view>
		</transition>
    <!-- tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/huiyuan">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.app-container{
  padding-top:40px;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);//从最右侧进来
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);//向左边消失。左上角在-100%的位置。我的理解
}
.v-enter-active,.v-leave-active{
	transition: all 0.5s ease;
}
</style>
