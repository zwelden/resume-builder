<template>
    <div class="resume-section-title">
        <div class="section-bar"></div>
        <div class="section-name">
            {{ titleName }}
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'LongSectionTitle',
    props: ['titleName']
}
</script>

<style scoped>
.resume-section-title {
    position: relative;
    text-align: left;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #323232;
    padding-bottom: .5rem;
    /* border-bottom: 2px solid #a5a3a8; */
    margin-bottom: 1rem;
    margin-right: calc(-0.5in - 1rem);

}

.section-name {
    position: relative;
    display: inline-block;
    background: #fff;
    z-index: 2;
    padding-right: 1rem;
}

.section-bar {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 2px;
    background: #a5a3a8;
    transform: translateY(-50%);
}
</style>