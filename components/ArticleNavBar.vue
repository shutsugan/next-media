<template>
	<div class="ArticleNavBar">
		<back-icon />
		<logo logo="../assets/images/or-logo.png" />
		<menu-icon />
	</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import MenuIcon from '~/components/MenuIcon.vue'
import BackIcon from '~/components/BackIcon.vue'

export default {
	components: {
		Logo,
		MenuIcon,
		BackIcon
	}
}
</script>

<style>
.ArticleNavBar {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100vw;
	height: 60px;
	background: #FFF;
    border-bottom: solid 1px #DDD;
}
</style>