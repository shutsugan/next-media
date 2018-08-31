<template>
	<div class="SocialButton">
        <button :class="['SocialButton__button', logo_class]">
            <img 
                class="SocialButton__icon" 
                :src="src" 
                :alt="logo_class"
            >
            <p class="SocialButton__text">
                <span class="SocialButton__count">({{count}})</span> 
                {{text}}
            </p>
        </button>
    </div>
</template>

<script>
import facebook_logo from '~/assets/images/facebook.png'
import twitter_logo from '~/assets/images/twitter.png'

export default {
    props: ['img_url', 'count'],
    data () {
        const match_url = this.img_url === '~/assets/images/facebook.png';

		return {
			src: match_url ? facebook_logo : twitter_logo,
            logo_class: match_url ? 'facebook': 'twitter',
            text: match_url 
                ? "\u200E \u0634\u0627\u0631\u0643" 
                : "\u200E \u063A\u0631\u062F",
		}
	}
}
</script>

<style lang="scss">
$font-stack: 'Changa', sans-serif;

.SocialButton__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: none;
    border-radius: 3px;
    font-size: 1em;
    font-weight: bold;
    color: #FFF;
}

.SocialButton__button {
    .SocialButton__icon {
        width:40px;
        height:40px;
    }

    .SocialButton__text {
        font-family: $font-stack;
        padding-right: 8px;
    }

    .SocialButton__count {
        font-size: .8em;
        font-weight: normal;
    }
}

.facebook {
    background: #3b5998;
}

.twitter {
    background: #55acee;
}
</style>

