<template>
    <div class="NavBarMenu js-NavBarMenu">
        <nuxt-link 
            class="NavBarMenu__item" 
            v-for="item in menu_items" 
            :key="item.id"
            :to="`/categories/${item.object_id}`"
        >
            {{item.label}}
        </nuxt-link>
        <nuxt-link
            class="NavBarMenu__item NavBarMenu__item--height" 
            to="/"
        >
            <i class="material-icons material-icons--margin-top active-tab">home</i>
        </nuxt-link>
    </div>
</template>

<script>
    import fetch from 'node-fetch'
    import Carousel from '~/modules/Carousel'

    export default {
        data() {
            return {
                menu_items: []
            };
        },
        mounted() {
            this.fetchMenu(_ => {
                //add swipe ability when the menu is mounted.
                const container = document.querySelector('.js-NavBarMenu');
                const options = {
                    slidesToScroll: 1,
                    slidesVisible: 2,
                    loop: false
                };

                new Carousel(container, options);
            });
        },
        methods: {
            fetchMenu: function (callback) {
                const uri = 'http://femme.nextmedia.ma/api/menus/get_menu/?menu_id=7';
                fetch(uri)
                    .then(res => res.json())
                    .then(data => this.menu_items = data.menu.output)
                    .then(_ => callback())
                    .catch(err => console.error(err));
            }
        }
    }
</script>

<style>
.NavBarMenu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 45px;
    border-top: solid .5px #83328e;
    background: linear-gradient(45deg, #6d2f8f, #a2378e);
    color: #ae76b3;
    cursor: pointer;
}

.material-icons--margin-top {
    margin-top: 7px;
}

.active-tab {
    color: #FFF;
}

.carousel {
    position: relative;
}

.carousel__container {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform .3s;
    transform: translate3d(0, 0, 0);
}

.carousel__item {
    text-align: right;
}

.carousel__next {
    display: none;
    right: 0px;
}

.carousel__prev {
    display: none;
    right: auto;
    left: -20px;
}
</style>
