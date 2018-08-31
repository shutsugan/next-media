<template>
    <div class="ArticlesList">
        <article-card 
            v-for="article in articles"
            :key="article.id"
            :article="article"
            :big="false"
        />
        <button 
            class="ArticlesList__load-more-btn js-load-more"
            @click="loadMoreArticles"
        >+</button>
    </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue';

export default {
    components: {
		ArticleCard
	},
    props: ['url'],
    data() {
        return {
            articles: [],
            page: 1
        };
    },
    mounted() {
        this.fetchArticles(this.page);
    },
    methods: {
        fetchArticles: function(page = 1, callback = _ => {}) {
            const uri = `${this.url}${page}`;
            fetch(uri)
                .then(res => res.json())
                .then(data => this.articles = this.articles.concat(data.posts))
                .then(_ => callback())
                .catch(err => console.error(err));
        },
        loadMoreArticles: function(event) {
            //increment the page number, and 
            //show the loading indicator.
            const page = ++this.page;
            const target = this.loadingMoreIndocator(event);

            this.fetchArticles(page, _ => target.textContent = '+');
        },
        loadingMoreIndocator: function(event) {
            const loader = '<i class="material-icons">hourglass_empty</i>';
            
            const target = event.target;
            target.textContent = '';
            target.insertAdjacentHTML('afterbegin', loader);

            return target;
        }
    }
}
</script>

<style lang="scss">
$icon-color: #DDD;
$font-color: #FFF;

.ArticlesList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 960px;
    margin: auto;
    align-items: center;
    padding: 16px;
}

.ArticlesList {
    .ArticlesList__load-more-btn {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: solid 1px;
        border-color: $icon-color;
        background: transparent;
        font-size: 2em;
        color: $icon-color;
        cursor: pointer;
        transition: .3s;
    }

    .ArticlesList__load-more-btn:hover {
        background: $icon-color;
        color: $font-color;
    }
}
</style>