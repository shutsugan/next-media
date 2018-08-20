<template>
	<div class="Logo">
		<img 
			class="Logo__image" 
			:src="current_logo" 
			alt="Next Media Logo"
		/>
	</div>
</template>

<script>
import logo from '~/assets/images/logo.png';
import orLogo from '~/assets/images/or-logo.png';

export default {
	props: ['logo'],
  
	data () {
		return {
			current_logo: this.logo === '../assets/images/logo.png'
				? logo 
				: orLogo
		}
	}
}
</script>

<style>
.Logo {
	height: 30px;
	width: 154px;
	text-align: center;
}

.Logo__image {
    max-width: 100%;
    height: 100%;
}
</style>

