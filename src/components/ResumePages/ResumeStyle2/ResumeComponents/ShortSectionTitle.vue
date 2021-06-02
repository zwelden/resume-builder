<template>
    <div class="resume-section-title">
        {{ titleName }}
    </div>
</template>

<script>
export default {
    name: 'ShortSectionTitle',
    props: ['titleName']
}
</script>

<style scoped>
.resume-section-title {
    text-align: left;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #323232;
    padding-bottom: .5rem;
    border-bottom: 2px solid #a5a3a8;
    margin-bottom: 1rem;
    margin-right: -1rem;

}
</style>