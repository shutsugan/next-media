<template>
    <div class="ArticleCard">
        <nuxt-link :to="`/article/${id}`">
            <div class="ArticleCard__poster-section">
                <img class="ArticleCard__poster" :src="thumbnail" :alt="title">
                <span class="ArticleCard__badge">{{category}}</span>
            </div>
            <div class="ArticleCard__title">
                <p>{{title}}</p>
            </div>
            <div class="ArticleCard__date">
                <p>{{date}}</p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['article'],
    data() {
        return {
            id: '',
            thumbnail: '',
            category: '',
            title: '',
            date: '',
        };
    },
    mounted() {
        const {id, thumbnail_images, title, date, categories} = this.article;
        this.id = id;
        this.thumbnail = thumbnail_images.large.url;
        this.category = categories[0].title;
        this.title = title;
        this.date = this.formatDate(date);
    },
    methods: {
        formatDate: function(date) {
            const arabic_months = [
                "يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
                "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
            ];

            const splited_date = date.split('-');
            const year = splited_date[0];
            const month = arabic_months[parseInt(splited_date[1])];
            const day = splited_date[2].split(' ').shift();

            //\u200u is Left-to-Right Marker character
            //which used to correct string rendering placement.
            return `${year} ${month} \u200E ${day}`;

        }
    }
}
</script>

<style scoped>
.ArticleCard {
    display: flex;
    flex-direction: column;
    text-align: right;
    width: 100%;
    height: auto;
    margin-bottom: 30px;
}

.ArticleCard__poster-section {
    position: relative;
}

.ArticleCard__poster {
    width: 100%;
    min-width: 100%;
    height: auto;
    background: #DDD;
}

.ArticleCard__badge {
    position: absolute;
    right: 0;
    bottom: 0px;
    padding: 0px 8px;
    border-radius: 3px;
    background: #db0303;
    font-size: .6em;
    color: #FFF;
}

.ArticleCard__title {
    font-size: 1.2em;
    color: #000;
}

.ArticleCard__date {
    font-size: .7em;
    color: #767676;
}
</style>