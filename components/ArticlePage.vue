<template>
    <div class="ArticlePage">
        <article-card 
            :article="article"
            :big="true"
        />
        <social-section />
        
        <div class="ArticlePage__excerpt">
            <p>{{article.excerpt | stripHtmlTags}}</p>
        </div>
        <br />
        <div class="ArticlePage__content">
            {{article.content}}
        </div>

        <social-section />
    </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'
import SocialSection from '~/components/SocialSection.vue'

export default {
    props: ['article'],
    components: {
        ArticleCard,
        SocialSection
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

<style lang="scss">
.ArticlePage {
    height: 1px;
    max-width: 960px;
    width: 350px;
}

.ArticlePage {
    .ArticlePage__excerpt {
        font-size: 1.1em;
        font-weight: bold;
    }

    .ArticlePage__content {
        font-size: 1em;
    }

    img {
        width: 100%;
        height: auto;
    }

    iframe {
        width: 350px !important;
    }

    @media screen and (min-width: 690px) {
        iframe {width: 670px !important;}
    }

    @media screen and (min-width: 930px) {
        iframe {width: 910px !important;}
    }
}

@media screen and (min-width: 690px) {
    .ArticlePage {width: 670px;}
}

@media screen and (min-width: 930px) {
    .ArticlePage {width: 910px;}
}
</style>