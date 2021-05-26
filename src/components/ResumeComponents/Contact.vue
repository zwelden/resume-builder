<template>
    <div class="resume-contact-info">
        <div v-if="data.location">{{ data.location }}</div>
        <div v-if="data.phone">{{ data.phone }}</div>
        <div v-if="data.email"><a href="#">{{ data.email }}</a></div>
        <div v-if="data.website"><a href="#">{{ data.website }}</a></div>
        <div v-if="data.linkedin"><a href="#">{{ data.linkedin }}</a></div>
        <div v-if="data.github"><a href="#">{{ data.github }}</a></div>
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
    font-size: .9rem;
}
</style>