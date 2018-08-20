<template>
	<div class="NavBar">
		<logo logo="../assets/images/logo.png" />
		<menu-icon />
	</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import MenuIcon from '~/components/MenuIcon.vue'

export default {
	components: {
		Logo,
		MenuIcon
	}
}
</script>

<style>
.NavBar {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100vw;
	height: 60px;
	background: linear-gradient(45deg, #6d2f8f, #a2378e);
}
</style>