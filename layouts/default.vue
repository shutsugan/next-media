<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Changa', sans-serif;
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
	color: #ae76b3;
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
</style>

