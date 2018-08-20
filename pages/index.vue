<template>
	<section class="container">
		<div>
			<nav-bar />
			<nav-bar-menu />
			<articles-list 
				url="http://femme.nextmedia.ma/api/get_recent_posts/?page=" 
			/>
		</div>
	</section>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import NavBarMenu from '~/components/NavBarMenu.vue'
import ArticlesList from '~/components/ArticlesList.vue'

export default {
	components: {
		NavBar,
		NavBarMenu,
		ArticlesList
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

