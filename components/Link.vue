<template>
<a :href="link" target="_blank" rel="noopener noreferrer">{{name}}</a>
</template>

<script>
export default {
    props: ["name", "link"]
}
</script>

<style lang="scss" scoped>
a {
    color: $secondary;

    &:hover {
        border-bottom: 1px solid $secondary;
    }
}
</style>
