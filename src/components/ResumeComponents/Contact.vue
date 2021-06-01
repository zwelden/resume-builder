<template>
    <div class="resume-contact-info">
        <div v-if="data.location">{{ data.location }}</div>
        <div v-if="data.phone">{{ data.phone }}</div>
        <div v-if="data.email"><small><a href="#">{{ data.email }}</a></small></div>
        <div v-if="data.website"><small><a href="#">{{ data.website }}</a></small></div>
        <div v-if="data.linkedin"><small><a href="#">{{ data.linkedin }}</a></small></div>
        <div v-if="data.github"><small><a href="#">{{ data.github }}</a></small></div>
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