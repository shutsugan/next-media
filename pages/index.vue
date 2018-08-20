<template>
	<section class="container">
		<div>
			<nav-bar />
		</div>
	</section>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
	components: {
		NavBar
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

