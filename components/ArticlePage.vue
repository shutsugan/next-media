<template>
    <div class="ArticlePage">
        <article-card :article="article"/>
        
        <div class="ArticlePage__excerpt">
            <p>{{article.excerpt | stripHtmlTags}}</p>
        </div>
        <br />
        <div class="ArticlePage__content">
            {{article.content}}
        </div>
    </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'

export default {
    props: ['article'],
    components: {
        ArticleCard
    },
    data() {
        return {
            excerpt: '',
            content: '',
        };
    },
    mounted() {
        const {excerpt, content} = this.article;
        
        this.excerpt = excerpt;
        this.content = content;

        //parse the article content
        this.domParser('.ArticlePage__content');
    },
    methods: {
        domParser: function(selector) {
            document
                .querySelectorAll('.ArticlePage__content')
                .forEach(element => {
                    const content = element.textContent;

                    element.textContent = '';
                    element.insertAdjacentHTML('afterend', content);
                });
        }
    },
    filters: {
        stripHtmlTags: function(str = '') {
            return str.replace(/<(?:.|\n)*?>/gm, '\n\r');
        }
    }
}
</script>

<style>
.ArticlePage {
    height: 1px;
    max-width: 960px;
}

.ArticlePage__excerpt {
    font-size: 1.1em;
    font-weight: bold;
}

.ArticlePage__content {
    font-size: 1em;
}
</style>