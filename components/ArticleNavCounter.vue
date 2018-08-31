<template>
    <div class="ArticleNavCounter">
        <div 
            :class="[len === current_article ? 'active' : '', 'ArticleNavCounter__bullet']"
            v-for="len in length"
            :key="len"
        >
        </div>
    </div>
</template>

<script>
export default {
    props: ['length', 'current_article']
}
</script>

<style lang="scss">
.ArticleNavCounter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    background: linear-gradient(45deg, #6d2f8f, #a2378e);
}

.ArticleNavCounter {
    .ArticleNavCounter__bullet{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ae76b3;
        margin: 0 4px;
        transition: .3s;
    }

    .active {
        background: #FFF;
    }
}
</style>