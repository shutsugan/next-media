<template>
	<div>
		<nuxt/>
	</div>
</template>

<style lang="scss">
$font-stack: 'Changa', sans-serif;
$font-color: #ae76b3;

html {
	font-family: $font-stack;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*, *:before, *:after {
	box-sizing: border-box;
	outline: none;
	margin: 0;
}

a {
	color: $font-color;
	text-decoration: none;
}

.carousel {
	position: relative;
}

.carousel__container {
	display: flex;
	justify-content: center;
	align-items: center;
	transition: transform .3s;
	transform: translate3d(0, 0, 0);
}

.carousel__item {
	text-align: right;
}

.carousel__next {
	display: none;
	right: 0px;
}

.carousel__prev {
	display: none;
	right: auto;
	left: -20px;
}

.page-enter-active {
	transition: opacity 0.25s ease-out;
}

.page-leave-active {
	transition: opacity 0.25s ease-in;
}

.page-enter,
.page-leave-active {
	opacity: 0;
}
</style>

