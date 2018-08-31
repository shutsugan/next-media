<template>
    <nuxt-link to="/">
        <div class="BackIcon">
            <i class="material-icons">arrow_back_ios</i>
        </div>
    </nuxt-link>
</template>

<style lang="scss">
$dimension: 60px;
$icon-color: #DDD;

.BackIcon {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: $dimension;
    height: $dimension;
    color: $icon-color;
    cursor: pointer;
}
</style>