<template>
    <div class="article">
        <article-nav-bar />
        
        <div class="article__container">
            <article-page
                v-if="article" 
                :article="article" 
            />
        </div>
    </div>
</template>

<script>
import fetch from 'node-fetch';
import ArticleNavBar from '~/components/ArticleNavBar.vue'
import ArticlePage from '~/components/ArticlePage.vue'

export default {
    components: {
		ArticleNavBar,
        ArticlePage
    },
    data() {
        return {
            article: false
        };
    },
    mounted() {
        this.fetchArticle();
    },
    methods: {
        fetchArticle: function() {
            const uri = `http://femme.nextmedia.ma/api/get_post/?id=${this.$route.params.id}`;
            fetch(uri)
                .then(res => res.json())
                .then(data => this.article = data.post)
                .catch(err => console.error(err));
        }
    }
}
</script>

<style>
.article__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: right;
    height: auto;
    margin: 16px;
}
</style>