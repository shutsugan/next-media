<template>
	<div class="SocialSection">
        <social-button 
            img_url="~/assets/images/facebook.png"
            count="0"     
        />
        <social-button 
            img_url="~/assets/images/twitter.png" 
            count="0"
        />
    </div>
</template>

<script>
import SocialButton from '~/components/SocialButton.vue'

export default {
    props: ['url', 'logo'],
    components: {
        SocialButton
    }
}
</script>

<style>
.SocialSection {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    margin: 16px 0;
}
</style>

