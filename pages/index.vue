<template>
	<section class="container">
		<div>
			<nav-bar />
			<nav-bar-menu />
		</div>
	</section>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import NavBarMenu from '~/components/NavBarMenu.vue'

export default {
	components: {
		NavBar,
		NavBarMenu
	}
}
</script>

<style>
.container {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	text-align: center;
	overflow-x: hidden;
}
</style>

