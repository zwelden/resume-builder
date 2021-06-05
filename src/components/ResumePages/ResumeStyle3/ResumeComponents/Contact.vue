<template>
    <div class="resume-contact-info">
        <div v-if="data.location">{{ data.location }}</div>
        <div v-if="data.phone">{{ data.phone }}</div>
        <div v-if="data.email">{{ data.email }}</div>
        <div v-if="data.website"><a :href="data.website">{{ data.website }}</a></div>
        <div v-if="data.linkedin"><a :href="data.linkedin">{{ data.linkedin }}</a></div>
        <div v-if="data.github"><a :href="data.github">{{ data.github }}</a></div>
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
    font-weight: 400;
    text-align: left;
    font-size: .8rem;
}

.resume-contact-info div {
    margin-bottom: .5rem;
}
</style>