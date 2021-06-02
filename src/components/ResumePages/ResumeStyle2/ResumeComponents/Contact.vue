<template>
    <div class="resume-contact-info">
        <div v-if="data.location">{{ data.location }}</div>
        <div v-if="data.phone">{{ data.phone }}</div>
        <div v-if="data.email">{{ data.email }}</div>
        <div v-if="data.website">{{ data.website }}</div>
        <div v-if="data.linkedin">{{ data.linkedin }}</div>
        <div v-if="data.github">{{ data.github }}</div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    props: {
        data: Object
    }
}
</script>

<style scoped>
.resume-contact-info {
    /* font-family: 'Open Sans', sans-serif; */
    font-weight: 400;
    color: #3f3d44;
    text-align: left;
    font-size: .85rem;
    line-height: 2;
}
</style>