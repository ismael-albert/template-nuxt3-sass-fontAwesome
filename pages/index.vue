<template>
<div class="container">
    <div class="box">

        <i class="fa-solid fa-link"></i>
        <div class="box-links">
            <Link name="Nuxt3" link="https://v3.nuxtjs.org/" />
            +
            <Link name="Sass" link="https://sass-lang.com/" />
            +
            <Link name="FontAwesome" link="https://fontawesome.com/" />
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 19, 0.966);

    .box {
        color: $secondary;
        @extend .text-2xl;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(0 0 0 / 15%);
        ;
        width: 40vw;
        height: 50vh;
        border-radius: 20px;

        .box-links {
            display: flex;
            gap: 10px;
        }

        i {
            font-size: 14px;
            margin-right: 10px;
        }
    }
}
</style>
