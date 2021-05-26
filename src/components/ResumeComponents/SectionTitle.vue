<template>
    <div class="resume-section-title">
        {{ titleName }}
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: ['titleName']
}
</script>

<style scoped>
.resume-section-title {
    font-size: .85rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #2b79cb;
    margin-bottom: .5rem;
}
</style>