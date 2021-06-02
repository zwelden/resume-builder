<template>
    <div class="resume-title">
        <div class="resume-person-name">
            {{ applicantName }}
        </div>
        <div class="resume-position-title">
            {{ jobTitle }}
        </div>
        <div class="github-link">
            <div v-if="github"><a href="#">{{ github }}</a></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: ['applicantName', 'jobTitle', 'github']
}
</script>

<style scoped>
.resume-person-name {
    font-size: 3.25rem;
    line-height: 1;
    margin-bottom: 5px;
    font-weight: 500;
    letter-spacing: 1px;
}

.resume-position-title {
    font-size: 1.75rem;
    line-height: 1;
}
</style>