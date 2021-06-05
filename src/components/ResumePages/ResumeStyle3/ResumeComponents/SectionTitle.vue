<template>
    <div class="resume-section-title">
        <div class="resume-title-name">{{ titleName }}</div>
        <div class="resume-divider-bar"></div>
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
    position: relative;
    font-size: 1.25rem;
    letter-spacing: 1.5px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
}
.resume-title-name {
    margin-bottom: .35rem;
}
.resume-divider-bar {
    position: relative;
    height: 3px;
    width: 35px;
    background: #323232;
}
</style>