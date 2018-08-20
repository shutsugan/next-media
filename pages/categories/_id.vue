<template>
	<section class="container">
		<div class="categories__container">
            <article-nav-counter 
                :length="articles.length"
                :current_article="current_article"
            />
			<article-nav-bar />
			
            <div class="categories js-categories">
                <article-page 
                    class="categories__tabs"
                    v-for="article in articles"
                    :key="article.id"
                    :article="article"
                />
            </div>
		</div>
	</section>
</template>

<script>
import fetch from 'node-fetch';
import ArticleNavCounter from '~/components/ArticleNavCounter.vue'
import ArticleNavBar from '~/components/ArticleNavBar.vue'
import ArticlePage from '~/components/ArticlePage.vue'
import Carousel from '~/modules/Carousel'

export default {
	components: {
        ArticleNavCounter,
		ArticleNavBar,
        ArticlePage
    },
    data() {
        return {
            articles: [],
            current_article: 1
        }
    },
    mounted() {
        this.fetchArticles(_ => {
            //add swipe ability when the page is mounted.
            const container = document.querySelector('.js-categories');
            const options = {
                slidesToScroll: 1,
                slidesVisible: 1,
                loop: false
            };

            new Carousel(container, options, direction => {
                this.current_article += direction;
            });
        });
    },
    methods: {
        fetchArticles: function (callback) {
            const uri = `http://femme.nextmedia.ma/api/get_category_posts/?id=${this.$route.params.id}`;
            fetch(uri)
                .then(res => res.json())
                .then(data => this.articles = data.posts)
                .then(_ => callback())
                .catch(err => console.error(err));
        }
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

.categories__container {
    width: 100%;
    max-width: 100vw;
}

.categories {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: auto;
}

.categories__tabs {
    width: 28%;
    height: 200px;
    margin: 16px auto;
}

@media screen and (min-width: 690px) {
    .categories__tabs {
        width: 50%;
        height: 200px;
        margin: 16px auto;
    }
}

@media screen and (min-width: 930px) {
    .categories__tabs {
        width: 68%;
        height: 200px;
        margin: 16px auto;
    }
}
</style>